"""Assemble three editorial candidates from the deliberately simple master Markdown.

This handles only headings, paragraphs, bold text, and links present in this
manuscript. It does not publish, alter archives, or execute an application.
"""
from pathlib import Path
import hashlib
import html
import json
import re
from html.parser import HTMLParser

ROOT = Path(__file__).resolve().parent
master = (ROOT / 'master-article.md').read_text(encoding='utf-8')
blocks = master.strip().split('\n\n')
assert not any(re.match(r'^(?:[-*>] |```|\|)', x) for x in blocks), 'Unsupported block syntax'
link = re.compile(r'\[([^\]]+)\]\((https://[^)]+)\)')

def inline(s):
    out, pos = [], 0
    for m in link.finditer(s):
        out.append(html.escape(s[pos:m.start()]))
        out.append('<a href="' + html.escape(m[2], quote=True) + '">' + html.escape(m[1]) + '</a>')
        pos = m.end()
    out.append(html.escape(s[pos:]))
    return re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', ''.join(out))

def visible(s):
    return link.sub(lambda m: m[1], re.sub(r'^(?:#{1,3} |\d+\. )', '', s, flags=re.M)).replace('**', '')

def slug(s):
    return re.sub(r'[^a-z0-9]+', '-', s.lower()).strip('-')

rendered, toc, figures = [], [], []
for block in blocks:
    heading = re.match(r'^(#{1,3}) (.*)$', block)
    if heading:
        level, text = len(heading[1]), heading[2]
        sid = slug(text)
        rendered.append(f'<h{level} id="{sid}">{inline(text)}</h{level}>')
        if level == 2 and not text.startswith('How to turn'):
            toc.append(f'<a href="#{sid}">{html.escape(text)}</a>')
        continue
    if re.match(r'^\d+\. ', block):
        lines=block.splitlines()
        assert all(re.match(r'^\d+\. ', line) for line in lines)
        rendered.append('<ol>' + ''.join('<li>' + inline(re.sub(r'^\d+\. ', '', line)) + '</li>' for line in lines) + '</ol>')
    elif block.startswith('**Figure '):
        url = next(m[2] for m in link.finditer(block) if m[1] == 'Original full-resolution figure')
        n = len(figures) + 1
        alt = ('Copilot V1: a text-only option, ideation, diagram revision and feedback paths.' if n == 1 else 'Claude V2: five phases with revision paths; the negative route into Sharpen it is absent. Historical claims are qualified in the caption and adjoining text.')
        rendered.append(f'<figure><a href="{html.escape(url, quote=True)}"><img src="{html.escape(url, quote=True)}" alt="{html.escape(alt, quote=True)}" loading="lazy"></a><figcaption>{inline(block)}</figcaption></figure>')
        figures.append({'number': n, 'url': url, 'alt': alt, 'caption_markdown': block})
    else:
        rendered.append('<p>' + inline(block) + '</p>')

article = '\n'.join(rendered)
css = 'body{margin:0;background:#f5f3ee;color:#202a2c;font:19px/1.65 Georgia,serif}main{max-width:850px;margin:auto;padding:36px 24px 90px}h1{font:700 2.7rem/1.1 system-ui}h2{font:700 1.6rem/1.25 system-ui;margin-top:3rem}a{color:#075b65;text-decoration-thickness:1px;text-underline-offset:3px}aside,nav{font:15px/1.6 system-ui;padding:20px;border:1px solid #acb9b4;background:#fff}nav a{display:block}figure{margin:2rem 0;padding:16px;background:white;border:1px solid #a7b5b1}img{display:block;max-width:100%;height:auto;margin:auto}figcaption{font:16px/1.6 system-ui;margin-top:18px}p{margin:1.3em 0}@media(max-width:600px){main{padding:20px 16px}h1{font-size:2.1rem}body{font-size:18px}figure{padding:8px}}'
header = '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>The First Diagram Is Usually a Liar | Candidate</title><meta name="description" content="A practitioner case study of AI diagrams, structured disagreement, and maintainable process knowledge."><style>' + css + '</style></head><body><main>'
banner = '<aside><strong>Publication candidate, September 29, 2026.</strong> Prepared for owner review. This preview is not a publication receipt.</aside>'
(ROOT / 'website-candidate.html').write_text(header + banner + '<nav aria-label="Article sections">' + ''.join(toc) + '</nav><article>' + article + '</article></main></body></html>', encoding='utf-8')
(ROOT / 'linkedin-article.html').write_text(header + banner + '<article>' + article + '</article></main></body></html>', encoding='utf-8')
plain = '\n\n'.join(link.sub(lambda m: m[1] + ' (' + m[2] + ')', re.sub(r'^#{1,3} ', '', b)).replace('**','') for b in blocks) + '\n'
(ROOT / 'linkedin-article.txt').write_text(plain, encoding='utf-8')
notion = 'Publication candidate, September 29, 2026. Prepared for owner review. This page is an editorial candidate, not a record of a live article update.\n\n<table_of_contents/>\n\n' + '\n\n'.join(blocks[1:]) + '\n'
for figure in figures:
    notion = notion.replace(figure['caption_markdown'], '![' + figure['alt'] + '](' + figure['url'] + ')\n\n' + figure['caption_markdown'])
(ROOT / 'notion-candidate.md').write_text(notion, encoding='utf-8')
(ROOT / 'figure-manifest.json').write_text(json.dumps(figures, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')

class BodyParser(HTMLParser):
    def __init__(self):
        super().__init__(); self.in_article=False; self.text=[]; self.links=[]; self.images=[]
    def handle_starttag(self, tag, attrs):
        attrs=dict(attrs)
        if tag=='article': self.in_article=True
        elif self.in_article and tag=='a': self.links.append(attrs['href'])
        elif self.in_article and tag=='img': self.images.append(attrs)
    def handle_endtag(self, tag):
        if tag=='article': self.in_article=False
        elif self.in_article and tag in ['h1','h2','h3','p','figcaption','li']: self.text.append(' ')
    def handle_data(self, data):
        if self.in_article: self.text.append(data)

norm=lambda s: ' '.join(s.split())
expected=norm(' '.join(visible(b) for b in blocks))
results={}
for name in ['website-candidate.html','linkedin-article.html']:
    parser=BodyParser(); parser.feed((ROOT/name).read_text(encoding='utf-8'))
    assert norm(''.join(parser.text))==expected, name+' prose drift'
    assert len(parser.images)==2 and all(i.get('alt') for i in parser.images)
    results[name]={'article_text_matches_master':True,'images':len(parser.images),'links':len(parser.links)}
assert len(plain)<125000 and 7000<=len(expected.split())<=12000
assert '\u2014' not in master
assert not re.search(r'notion\.(?:so|com)|\b[0-9a-f]{32}\b', master, re.I)
assert not re.search(r'\bv0\.[1-9]\b|Zack Snyder|\bv1\.0\b', master, re.I)
announcement=(ROOT/'linkedin-announcement.md').read_text(encoding='utf-8')
assert len(announcement)<3000 and '\u2014' not in announcement
files=['master-article.md','source-ledger.md','linkedin-announcement.md','website-candidate.html','linkedin-article.html','linkedin-article.txt','notion-candidate.md','figure-manifest.json']
manifest={'status':'candidate-only','date':'2026-09-29','github_evidence_baseline':'249b72ab8bb2813dc74156444683f2eb43eec3e2','master_visible_words':len(expected.split()),'master_markdown_characters':len(master),'linkedin_plain_characters':len(plain),'announcement_characters':len(announcement),'checks':results,'notion_readback':'pending','files':[{'path':f,'sha256':hashlib.sha256((ROOT/f).read_bytes()).hexdigest()} for f in files]}
(ROOT/'candidate-manifest.json').write_text(json.dumps(manifest,indent=2)+'\n',encoding='utf-8')
print(json.dumps({k:v for k,v in manifest.items() if k!='files'},indent=2))
