# The First Diagram Is Usually a Liar

## How to turn AI diagrams into shared understanding and maintainable process knowledge

By Jamie Hill | OverKill Hill P³

## Read the story. Work through the idea.

Before you settle into the long version, you have a choice. Read the argument here, or [open the interactive field guide](https://okhp3.github.io/first-diagram-is-a-liar/) and work through its ideas in your browser. Both belong to the same project. [OverKill Hill](https://overkillhill.com/) is home base, with the [story and its wider context](https://overkillhill.com/writings/first-diagram-is-a-liar/) connecting the writing, the application, and the projects that grew around them.

The application was created using [Replit](https://replit.com). That sentence still makes me smile. I began with a question about diagrams and ended up with a working single-page application that lets somebody explore the argument instead of only reading my explanation of it. Replit became one of the unexpected discoveries of this project: a way to turn a written idea into something a reader could actually operate. The implementation and subsequent improvements are maintained in GitHub, and the public application is hosted on GitHub Pages.

I didn't arrive with that destination neatly plotted. The route ran through Mermaid, competing AI interpretations, visual preferences, reusable Agent Skills, and the realization that a useful explanation could have controls. Somewhere along the way, the project stopped being only about making a better picture. It became an education in tools, methods, and skills I hadn't known to look for when I started. I'm excited by what I built, and by how much my own sense of what I could build changed while building it.

That's a rabbit hole I'm glad I went down.

The field guide gives that exploration a practical shape. Identify the kind of lie a tidy diagram might be telling. Adjust the illustrative ROY inputs and consider what clarity costs. Compare a clean forward path with a revision that exposes its loops. Explore a reusable visual-preference profile. Examine structured disagreement, then assemble a handoff for the next person. You can move between those activities without reading the whole essay first, and return to the longer explanation when a question deserves more space.

Try it with one process you know well. Name the exception that always gets explained in a meeting but never makes it into the diagram. Notice whether changing the view helps you describe that exception more precisely. Then bring the question back to the article's evidence and operating method. The application offers a place to rehearse the thinking; the article supplies the context and qualifications. Its sliders are illustrative, and its teaching diagrams aren't a general-purpose Mermaid editor.

This is the loop I want the project to support: read, interact, question, return, and improve. Someone arriving through LinkedIn can find the interactive route. Someone discovering the application can return to the story. Both should lead back to [overkillhill.com](https://overkillhill.com/), where the related projects and their context stay connected. Choose the form that helps you understand the work, then switch when another form would help more. A long article can explain why the first diagram lies. An interactive infographic can give you somewhere to practice catching it.

## The cost of a tidy lie

A diagram is a claim about how reality is structured. Every box says something exists. Every arrow says a relationship matters. Every missing exception makes a promise the author may never have intended to make.

That is a lot of authority for a picture that somebody generated between meetings.

The first diagram often looks resolved before the thinking has earned that confidence. The handoffs are smooth. The decisions have two convenient answers. Nobody is absent, the evidence arrives on time, and the process proceeds from start to finish with the optimism of a sales demonstration. Then somebody who actually does the work points at the middle and says, “That isn't what happens.”

Now the useful work can begin.

This article follows a small diagramming experiment into a larger business question: how can we make shared understanding easier to inspect, challenge, and maintain? I used several AI systems to help describe the process of writing a post about diagrams, turned their structured text into Mermaid diagrams, compared the submissions, and asked for revisions. The resulting archive preserves both rounds, the prompts, the pictures, and the compromises. I call the method a Council of AIs because comparison and human adjudication were deliberate parts of the exercise.

The experiment is a practitioner case study. It provides artifacts to examine and a record of my judgments. It does not establish a universal ranking of models or a measured productivity gain. Those boundaries matter because the business proposition is easy to inflate: cheap diagrams, therefore cheap understanding. The second does not automatically follow from the first.

My argument is that inexpensive generation makes disciplined review more valuable. A team can spend less effort constructing a picture and more effort checking whether it carries the right meaning. To sustain that benefit, the picture needs an underlying record of decisions, exceptions, authority, and evidence. Otherwise we have accelerated the production of documents that will become stale in exactly the familiar way.

The route through the argument is practical: define what understanding is worth, examine what the two diagram rounds actually show, turn the lessons into a proportionate working method, and maintain the knowledge behind the boxes. The corporate application proposed later uses an illustrative purchase-request process. It is a worked example, not a reported client implementation.

The finish line is an artifact a reader can use correctly and an owner can update responsibly.

## The translation and reconstruction tax

I've been drawing pictures on computers since the early 1990s. AutoCAD meant a black screen, commands, coordinates, and the concentration required to construct an idea line by line. Since then, I've used diagrams for house plans, networks, process flows, mind maps, organization charts, UML, and database relationships. Enough time in Visio probably qualifies a person for some sort of emotional settlement.

The recurring expense was translation. I could understand a relationship and still spend considerable time persuading a tool to show it. Pick the shapes. Route the lines. Fix the alignment. Move a box, discover what else moved, and remember what the box was supposed to mean. The mechanics of presentation competed with the reasoning the presentation was meant to support.

That production effort encouraged a particular habit: finish the thinking in prose, then commission the diagram as the polished summary. It made visual work feel expensive to reopen. A diagram that had consumed an afternoon acquired a strange protective aura. People were reluctant to disturb the layout even when the underlying process deserved disturbing.

The reader pays a second expense. Prose presents information in sequence, while many business problems depend on relationships across that sequence. A reader has to hold the owner from one paragraph, the exception from another, and the approval condition from a footnote in memory at the same time. Two competent people can reconstruct two different processes from the same document.

The familiar symptoms follow. A “quick summary” needs a meeting. An approval note produces another round of clarifying email. A procedure is technically complete, but its branching logic is difficult to find. The author has transferred the work of assembling the model to every reader.

A useful diagram can bring related conditions into view together. That advantage depends on the task and the design. A diagram can also bury a condition in a tiny label, turn a nuanced rule into an ambiguous diamond, or imply a sequence that the source never established. The medium is an opportunity to expose structure; it still requires judgment.

Larkin and Simon's research on diagrammatic problem solving offers a useful conceptual foundation. Their analysis distinguishes equivalent information from equally efficient use of that information. How a representation groups relevant elements can affect the search and inference needed to solve a problem. That helps explain why a visual arrangement may be useful without assuming that pictures always outperform prose. Their work is not a validation of this experiment or of a new business metric. [Research: diagrammatic representation](https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1551-6708.1987.tb00863.x)

For a business team, the question should therefore begin with the reader's task. Must a new analyst route an exception? Must a manager identify a dependency? Must an executive choose between options with different consequences? “Make this visual” is an incomplete brief. “Help this reader make this decision with these facts” gives the author something to optimize and the reviewer something to challenge.

This also changes how we handle detail. A senior sponsor may need the boundary and the consequence; an operator may need the missing-input rule. Both can use views of the same process record. Compressing everything into one executive slide usually makes the operator reconstruct the details. Expanding everything into one wall-sized diagram often makes the executive abandon it.

The communication problem is to choose a useful view while keeping the omitted knowledge reachable. That is where the economics of words, diagrams, and revision meet.

## ROY: what did the words buy?

ROY means Return on Your Words. I use it as a heuristic for useful understanding relative to the total effort invested in explanation. It asks a simple question: did this explanation remove enough confusion to justify creating, reviewing, using, and maintaining it?

The return is understanding. The investment includes more than the prompt.

A short prompt can produce a large diagram whose review consumes an hour. A carefully written paragraph can prevent that hour. Conversely, a small visual can make a tangled dependency understandable without requiring every reader to reconstruct it from several pages. Word count can expose waste, but it cannot settle the value of the communication.

Earlier artifacts in this project explored several ratio metaphors. Those formulas remain visible in the original diagrams as part of the experiment. The interpretation used here is deliberately consistent: ROY is a thinking aid, not a validated quantitative index. There is no scientifically established exchange rate between a word, a minute, a misunderstanding, and a business decision in this case study.

That distinction prevents some appealing arithmetic from becoming misleading. We should not add “words avoided,” “mistakes prevented,” and “decisions accelerated” into one score unless we have defined and justified the conversion between them. We should also avoid saying that a ratio of positive quantities becomes negative. A separate net-benefit calculation can be negative when costs exceed benefits. The metaphor should not get a promotion to mathematics because it looks good in a callout.

Here is how I would make ROY useful in a team. First name the task: for example, correctly route a request that arrives without required evidence. Then name the readers and the baseline they currently use. Decide what a correct answer must contain, including the exception and its owner. Compare the existing explanation with a revised one while tracking reader accuracy and the effort needed to create and review the revision.

The diagram earns credit when it improves that task. A shorter reading time accompanied by more incorrect decisions is a failure. Fewer questions accompanied by silent confusion is also a failure. A document that looks concise because readers give up has optimized the wrong variable.

For ordinary operational work, four observations are often more useful than an impressive composite score: whether readers choose the correct route, whether they recognize the important exceptions, how long the task takes, and how much correction or guided explanation they require. Preparation and maintenance effort belong beside those observations, so the author cannot make a solution look efficient by transferring costs to another person.

Consider the audience size and useful life as well. A laborious one-time diagram for one familiar decision may never repay its creation cost. A carefully reviewed process view used repeatedly by new staff may justify substantial effort. Neither result follows from the number of nodes. The context determines which investment is sensible.

An optional business calculation can express net time benefit over a named period: reader and rework time avoided, minus additional author, reviewer, and maintenance time. That is a proposed accounting approach. Teams would need their own observations, rates, and assumptions to translate it into money. This article supplies no invented percentage saving and no claim that the original Council exercise measured financial return.

ROY also has a useful editorial consequence. A sentence must contribute enough to deserve the reader's attention. Sometimes a short standalone line does more work than a dense paragraph. Sometimes a detailed explanation earns its length because removing it would hide a condition. Compression is successful when it removes unnecessary reconstruction while preserving the knowledge the task requires.

That rule applies to this article as much as to the diagrams. A long piece has to teach a method, expose its limitations, and make its evidence accessible. Length is an allowance, not an achievement.

## When the diagram became text

During the initial exploration, ChatGPT returned structured diagram syntax while I was describing a process. I asked what it was. Mermaid. That encounter changed my working habits because I could describe relationships in text and render a visual from them. Iteration became closer to editing a specification than rearranging furniture on a canvas.

Mermaid is a diagramming language and renderer. An AI system can help write its source; a person can write the same source by hand. The distinction matters whenever we evaluate the output. The model proposes structure and labels. The renderer turns the source into a visual. The surrounding product supplies its own interface, configuration, permissions, and constraints. A success or failure can originate at any of those layers. [Mermaid documentation](https://mermaid.js.org/intro/)

The practical shift is that relationships become editable source. Change a label, inspect a decision, compare revisions, retain the original, and render again. A source file can travel through version control and review. It becomes easier to ask what changed than it is with a screenshot alone.

Suppose the source describes a request moving from submission to review, then to either approval or a return for more information. A reviewer can inspect the condition attached to the decision. If the return route is absent, the omission is available for discussion before anyone spends an afternoon refining colors. The visual and the source reinforce each other: one makes relationships easier to see, the other makes them easier to inspect and change.

This lowers the penalty for an imperfect first attempt. A team can expose a rough model early, find a missing actor, and revise the source. The review conversation becomes more specific because people can point to the relationship they dispute. “This feels wrong” can become “requests without evidence must return to the requester before the approval check.”

Rendering is only the first check. I distinguish four questions. Does the source render? Does the structure faithfully represent the supplied facts? Can the intended reader use it correctly? Does its use improve the relevant work? Passing one question does not answer the next. A technically valid diagram can be operationally wrong, and an accurate diagram can still be difficult to read.

The first generated picture often fails at the second question. It tidies up uncertainty. It selects a plausible route where the source left a gap. It makes a process look linear because a linear process is easy to express. The appropriate response is to inspect the implied claims, not to add more loops until the image looks sophisticated.

Every loop should have a reason to exist. What condition sends the work back? Who handles it? What changes before another attempt? Where can the process stop? A decorative loop is the same problem as a decorative box: apparent complexity without useful explanation.

Text source also has limits. A short node label cannot carry a complete operating procedure. Renderer behavior and styling need checking in the destination. Source control records edits, but it does not automatically record why an operator accepted a change. Those responsibilities need an accompanying process record and a human owner. Mermaid makes that arrangement easier to maintain; the arrangement still has to be designed.

## How the Council experiment was run

The exercise began with a deliberately recursive brief. Produce a thesis about the value of diagrams, write a LinkedIn post about that value, and create a Mermaid diagram showing the ideation process behind writing the post. The diagram had to acknowledge the forks, revisions, and dead ends that a neat production story would usually remove. The communication was also supposed to demonstrate its own argument.

The [governing brief and archive](https://github.com/OKHP3/first-diagram-is-a-liar/tree/main/archive/diagramming-shootout) preserve the working materials. This was an exploratory exercise that evolved while I learned, rather than a controlled benchmark designed in advance. Its conditions should be visible before its selections are discussed.

The Core Five were ChatGPT, Claude, Copilot, Perplexity, and Gemini. The recorded conditions identify Gemini as a free-tier participant and the other four as paid-tier participants. They shared the central challenge, but that does not make their product access identical. The archive's older sentence about equal paid access is inconsistent with its detailed table; the table's disclosed difference governs this account.

Notion and Replit belong in the Specialty group. Notion's contribution included consolidation and custody of the work. Replit entered later with accumulated context and a build-environment perspective. My own familiarity with Replit was still developing. A late participant with more context and an unfamiliar interface presents a different condition from a fresh response to a common prompt.

ChatGPT V2 Pro is an Exhibition entry. Its additional capability access should remain visible rather than quietly joining a supposedly equivalent comparison. Mermaid.ai is recorded as an Attempted workflow. The attempt was useful for thinking about workflow design, but it is not an equivalent completed competitor in the final field. These four categories preserve the distinctions that a single leaderboard would erase.

There are fifteen diagram records in the preserved field: seven V1 entries and eight V2 entries, including the exhibition variant. The presentation deck has eighteen slides. Those counts describe different things. A slide is not necessarily a distinct submission, and a rendered image is not a new experiment merely because it has been exported at another size. The [diagram manifest](https://github.com/OKHP3/first-diagram-is-a-liar/blob/main/archive/diagramming-shootout/diagram-manifest.csv) connects entries to their sources and renders.

V1 and V2 mean the two diagram rounds throughout this article. V1 denotes the first archived competition submission for an entry, which may already reflect prompting or steering. V2 follows exposure to peer work and further instruction. It would overstate independence to describe V2 as another cold start. Comparison was part of the intervention.

The working sequence was fan out, compare, adjudicate, and synthesize. Multiple initial outputs made different interpretations visible. Peer review and revision exposed additional options. I then made human judgments about which elements were useful. A synthesis in this setting is an edited combination of contributions, not evidence that a committee automatically produces the best possible answer.

Three evaluation lanes developed. My architect judgment selected artifacts. Council-assisted review examined the submissions against the rubric. Audience polls invited public response. These lanes answer different questions and have different weaknesses. They should not be combined into one authority simply because all three used the word “evaluation.”

My recorded architect selections were Copilot V1 for Round 1 and Claude V2 for Round 2. Those are judgments within this exercise. The archive also contains narrative summaries of Council scoring, but the inspected record does not supply the original seven-criterion numeric matrix needed to reproduce every exact consensus claim. I therefore avoid presenting precise vote splits or self-score comparisons as independently reproducible findings here.

The rubric is still useful as a review aid. It invites examination of clarity, structure, honesty about the process, and the contribution of visual choices. Its presence does not transform a judgment into a validated measure. A reader can inspect the outputs, disagree with my selections, and identify a stronger explanation. That possibility is part of the point of preserving the artifacts.

The prompts are equally important. A normalized brief helps a later reader understand the intent, while the actual prompt sequence shows how the exercise developed. Those records should remain separate. If a roster, instruction, or scope changed, a clean retrospective must disclose the difference rather than quietly rewrite the old prompt to match the final story.

Finally, participant names identify the systems used in this case. They are not enduring personality types. A restrained paragraph and an elaborate diagram can come from the same product. Model versions, interfaces, access tiers, prior context, and instructions can change. The useful question is what a particular submission did under its recorded conditions.

## What the two rounds actually reveal

Copilot V1 earned my first-round selection because it makes several consequential choices visible. It starts by asking whether text alone is enough. One branch allows the work to remain in prose. The other proceeds into defining the clarity being sought, developing an angle, drafting, rendering, and checking whether the result is too tidy. A return loop sends the author back through revision. Feedback after publication returns to the earlier thinking.

That opening decision is easy to overlook. A diagram about the value of diagrams includes a legitimate route that avoids making one. It treats the medium as a choice conditioned on the task. For a corporate reader, that is a more useful starting point than assuming every process deserves another visual.

The diagram also separates ideation, modeling, and post assembly into recognizable areas. That gives a reader landmarks. Its decision labels and return paths help explain where correction happens. In practical terms, it exposes enough of the working process to invite a specific critique rather than asking the audience to admire an attractive summary.

**Figure 1. Copilot V1, Core Five, my Round 1 selection.** The original shows the choice to remain in prose, the diagram revision cycle, and a feedback route to earlier ideation. It is a preserved example, not a measured comprehension result. [Original full-resolution figure](https://raw.githubusercontent.com/OKHP3/first-diagram-is-a-liar/main/archive/diagramming-shootout/images/v1/etch-ai-sketch-using-a-council-to-design-at-velocity-copilot-v1.png) · [Mermaid source](https://github.com/OKHP3/first-diagram-is-a-liar/blob/main/archive/diagramming-shootout/diagrams/v1/etch-ai-sketch-using-a-council-to-design-at-velocity-copilot-v1.mmd)

One historical distinction deserves careful wording. An earlier five-entry source capture gives Copilot explicit theme configuration that the other captured entries did not supply. Later archived V1 files all carry configuration headers. These are different source stages. The earlier capture supports a bounded observation about Copilot's submitted configuration; the later headers do not establish who originally chose every setting or how each export was normalized.

That is a small archival detail with a large methodological consequence. If we compare altered exports while believing they are untouched submissions, we can attribute the renderer's presentation or an editor's normalization to the model. Keeping the source-to-render relationship visible protects the interpretation. It also gives the next person a chance to correct it.

Claude V2 earned my second-round selection for its narrative organization. It groups the work into ignition, strategy, craft, proof, and shipping, and makes several return paths conspicuous. The structure is easy to discuss as a sequence of concerns: establish the idea, test the framing, build the artifact, challenge it, and learn from use. That hierarchy helped me see the argument as an organized whole.

Selection did not make it flawless.

The preserved Claude V2 source contains a revealing regression. A decision asks whether the framing holds. Its positive route continues, but the negative route into the nearby “Sharpen it” activity is missing. That activity still points back toward the framing. In the archived Claude V1 source, the decision explicitly connected to the sharpening step when the framing was too abstract. Revision improved the presentation while losing a meaningful route.

There is also a compound decision about whether the diagram is a happy path and whether it shows real ideation. Those questions can have opposite answers. A single yes/no branch becomes ambiguous. Adding more visual sophistication has not repaired the underlying decision sentence. A reviewer should split the question or rewrite it so each outgoing route has one clear meaning.

The original includes rhetorical quantities and conclusions as well: an example contrasting minutes of prose with seconds of diagram, a variant ROY formula, and a node declaring the thesis confirmed. Those labels belong to the historical artifact. They are not measurements or conclusions established by this article. Keeping an original intact requires a caption that explains its limits, especially when the original itself is overconfident.

**Figure 2. Claude V2, Core Five, my Round 2 selection.** Its phase organization and visible revision paths illustrate the attraction of the design. The missing negative route, compound question, and unmeasured claims illustrate why a favored artifact still needs review. Original text and formulas are preserved as historical content. Its 3K medium label refers to the historical feed-post design, not this article's character limit. [Original full-resolution figure](https://raw.githubusercontent.com/OKHP3/first-diagram-is-a-liar/main/archive/diagramming-shootout/images/v2/etch-ai-sketch-using-a-council-to-design-at-velocity-claude-v2.png) · [Mermaid source](https://github.com/OKHP3/first-diagram-is-a-liar/blob/main/archive/diagramming-shootout/diagrams/v2/etch-ai-sketch-using-a-council-to-design-at-velocity-claude-v2.mmd)

These two examples support a narrower and more useful conclusion than an overall winner. Comparison made different strengths and defects available for inspection. My selection reflected the aspects I valued at that moment. Later scrutiny can find problems that the selection missed. A transparent archive makes that correction possible without pretending that the original judgment never happened.

The model interview material needs the same treatment. Retrospective explanations can suggest a useful reading of an artifact: why a hierarchy helps, where a label became overloaded, or what a revision appears to emphasize. Some published interview passages were paraphrased composites, and parts of the editorial source were reconstructed in a model's voice. They should be understood as interpretations, not privileged access to the original generation process.

An explanation can also be factually wrong about the picture it describes. A retrospective may say that V2 introduced a feature already present in V1, or assign a V2 phase name to the first round. The correct response is to inspect the exact source and render. Fluent self-critique is still a claim. It needs the same checking we would apply to a confident human commentary.

The audience response provided another lesson in limits. My published campaign account reports 1,735 poll impressions and five votes. That is approximately 0.29 votes per hundred impressions. It is a sparse participation signal. It is not a representative preference result, and impressions do not identify a deduplicated group of people moving through a tracked conversion journey.

Friction is a plausible explanation for low participation: asking readers to inspect a deck, compare diagrams, and vote requires effort. Relevance, timing, audience composition, visibility, and simple lack of interest could also matter. The campaign did not isolate those causes. The practical lesson is to design an evaluation around the decision and effort expected from participants, then collect evidence appropriate to the claim you intend to make.

Across the artifact review, interviews, and audience response, the same discipline recurs. Keep the observation separate from its interpretation. Say what the evidence can support. Preserve enough detail for someone else to challenge the conclusion. That is how an experiment becomes reusable business knowledge instead of a polished story about an experiment.

## Turn disagreement into a working method

The corporate method I would derive from this case is deliberately modest. Use alternative representations when they may expose a consequential omission. Give reviewers specific responsibilities. Preserve the reasons for accepting or rejecting changes. Validate the result with the people who need to use it. Then stop when further generation no longer justifies its cost.

This is a proposed operating method informed by the case, not a process whose business outcomes were measured in the original exercise. It can be piloted within an existing documentation practice. It does not require a new department, a new committee, or seven models in every meeting.

Start by deciding whether comparison is warranted. It is most useful when the process has unclear handoffs, meaningful exceptions, competing interpretations, or consequences that make a plausible omission expensive. A familiar sequence with an agreed owner and straightforward acceptance criteria may need only a short explanation and a normal review. The number of available AI systems is a poor reason to expand the review budget.

For an uncertain workflow, establish the decision the artifact must support. A process owner should be able to complete this sentence: “The intended reader must be able to do this correctly, using this information, within these boundaries.” If that sentence is still vague, generating alternatives will multiply the vagueness.

Then assign accountability. The subject-matter expert confirms how the work is actually performed. The author or analyst captures and models it. Reviewers challenge different aspects of the artifact. The domain owner adjudicates consequential disagreement. The document owner maintains the approved record. A small team can combine roles, but someone must be accountable for each decision.

Here is the sequence I would use.

1. **Frame the task.** Record the audience, scope, cost of error, known uncertainty, and the decision to support. Decide what is outside the model so omission is explicit.
2. **Capture the source.** Write a process narrative with actors, inputs, rules, outputs, exceptions, evidence, and unanswered questions. Ask the person who performs the work to confirm it.
3. **Produce a first model.** Link each consequential task and decision to the source record. Check that the diagram renders and that the labels mean what their arrows imply.
4. **Challenge the model.** Separate factual fidelity, reader usefulness, and implementation boundaries. Reviewers record observations and proposed corrections before seeing one another's conclusions where practical.
5. **Adjudicate.** Resolve differences using a source, a domain decision, or a targeted test. Record rejected suggestions as well as accepted ones when the distinction matters.
6. **Validate with readers.** Give representative tasks and exceptions to intended users. Observe what they do without rescuing every hesitation with a guided explanation.
7. **Publish and maintain.** Release the accepted view together with its source, owner, date, limits, and change triggers. A process change reopens the relevant checks.

The useful output from a reviewer is specific. “This is clearer” is a preference until we know what became easier to understand. “The missing-evidence route ends at approval because the return condition is absent” identifies a defect that can be tested. A reviewer should point to the node, the source statement, the consequence, and the smallest correction that resolves it.

A comparison should also preserve dissent. Suppose two reviewers agree on a tidy route and a third points out that the approving manager can be absent. The majority does not decide whether absence occurs. The source and the process owner do. If an exception exists, the diagram needs a route or a clear link to where that route is explained.

Reviewing with different AI systems may expose different suggestions, but shared training patterns and similar prompts can still produce correlated errors. Separate outputs are not a guarantee of independent knowledge. Human reviewers can also share an assumption. The operating method therefore needs a route back to evidence, rather than treating agreement as proof.

A narrow counter-review can be valuable when everyone agrees too comfortably. Ask for a plausible case that would make the conclusion fail: missing evidence, an unavailable actor, contradictory criteria, a stale threshold, or a reader who follows the diagram literally. Require the critic to say what would disprove the objection. Otherwise disruption becomes theatre and consumes attention without improving the artifact.

There is a stopping rule and a failure rule. Stop when consequential disagreements are resolved, the predeclared reader tasks meet the acceptance conditions, and another review pass produces only stylistic variation. If a consequential fact is unresolved, the intended reader takes the wrong route, or the effort cap is reached, defer acceptance. Escalate the factual question to the named process owner, narrow the scope, or return to the source capture. Exhausting the budget does not convert an unknown into an approved fact.

For a pilot, the owner can set a fixed review window and a maximum number of revision rounds before work begins. Those values are management choices, not thresholds validated by this experiment. Their purpose is to prevent endless polishing and to make the cost of additional review visible. A high-consequence ambiguity may warrant more investigation; the owner should make that decision explicitly.

The same rule applies to automated councils. Product features can help expose different outputs and organize synthesis. Perplexity's Model Council announcement, for example, describes visible disagreement and side-by-side outputs as well as synthesis. My preference for direct human adjudication is a workflow choice. It should not depend on claiming that an automated product necessarily hides disagreement. [Provider announcement](https://www.perplexity.ai/en-GB/changelog/what-we-shipped---february-6th-2026)

The lasting business capability is the review discipline. A team should be able to explain why it used comparison, what it learned, who made the consequential decision, and what would cause the accepted result to change. That explanation should survive a change of model or platform.

## A purchase request, followed all the way through

Consider an illustrative internal purchase-request process. It has a requester, a reviewer, and an approving authority. This is a constructed example for explaining the method. It contains no employer-specific policy, client data, measured savings, or claim of a deployed workflow.

The first picture is familiar: submit the request, review it, approve it. It looks complete because every box has a verb and every arrow has a destination. Yet the middle box has absorbed almost all the operational knowledge. What makes a request reviewable? Who can approve it? What happens if the evidence is missing? What if the assigned authority is unavailable? Can the requester approve their own request?

The source narrative should answer those questions before the picture invents answers. Give the submission step an identifier such as `REQ-01`. Record the required inputs in a locally approved policy reference. Give the completeness check an identifier such as `DEC-01`. Its two outcomes are complete enough for assessment, or returned for clarification. Define what information accompanies a return so the requester can repair the deficiency.

Give the approval-authority check a separate identifier, `DEC-02`. It asks whether the assigned person has authority under the applicable rule. The rule itself lives in the narrative or linked policy. A diagram label is a poor home for a long or frequently changing delegation table. The visual can show the decision and link to the rule without pretending the rule is obvious.

Keep the record explicit about uncertainty. If no source establishes the route for an unavailable approver, write “escalation route requires owner decision.” Do not ask an AI model to choose whichever route sounds like professional practice. A plausible control is still a new control. It may conflict with the organization's actual authority structure.

The first model now has a real chance of being useful. Submission leads to the completeness decision. Incomplete requests return with a reason. Complete requests proceed to assessment and the authority check. The process ends only when the chosen disposition has been recorded and communicated. Rejection, clarification, and approval have different meanings and should not disappear into one generic “done” box.

Assign three review concerns. A fidelity reviewer checks the model against the narrative. A usability reviewer checks whether labels and branching make the intended task clear. A controls reviewer checks whether the artifact implies authority or access that the record does not grant. These are responsibilities, not a prescribed number of people or products.

Suppose one review proposes combining the completeness and approval decisions to make the picture shorter. Another points out that a complete request can still lack approval. The adjudicator rejects the combination because it changes the meaning of the route. The record can be brief: “Keep `DEC-01` and `DEC-02` separate; completeness permits assessment, not approval.” That sentence prevents the next cleanup pass from reintroducing the same mistake.

Suppose another review proposes automatically escalating to the reviewer's manager. The narrative does not establish that manager's authority. This proposal is deferred to the process owner. The diagram remains a candidate until the owner identifies an authorized route or narrows the supported scope. A red warning shape may expose the gap, but it cannot resolve the organizational decision.

Once the owner has confirmed a route, validation can use ordinary cases and exceptions. Ask an intended reader to handle a complete request, a request missing evidence, a request outside the assigned approver's authority, and a case where the normal approver is unavailable. The reference answers come from the approved narrative. The test should examine the destination and the reason, so a lucky click does not look like comprehension.

A reader who routes missing evidence directly to approval has identified a material problem. Check whether the source is wrong, the diagram is ambiguous, or the task itself was poorly specified. Revise the relevant component and repeat the affected check. Do not bury the failed case inside an average completion-time improvement.

The artifact is accepted when it meets the owner's declared correctness requirements for its scope. The publication record names the narrative revision, the diagram revision, the owner, and the remaining limitations. It also records what was intentionally omitted. Readers can then tell whether the view is an orientation aid, an operating instruction, or a proposal awaiting a policy decision.

Now change the process. Imagine the organization revises its delegation policy so a particular category requires a different approval route. The stable identifier `DEC-02` lets the owner find the affected narrative rule, diagram edge, reader tasks, and related handoff instructions. Update those linked items and rerun the authority and absence cases. The identity of the decision remains stable while its rule changes.

This is where maintainability becomes tangible. A diagram that was merely an image requires someone to remember where else its meaning was copied. A linked record can make the dependencies inspectable. It still needs an owner to decide that the policy change matters and a reviewer to check the revised view. Automation can assist with finding and generating; acceptance remains a business responsibility.

The example also suggests a modest pilot question: does the linked narrative and visual help intended readers route these cases more accurately, with acceptable preparation and maintenance effort? That can be investigated without pretending the entire organization has been transformed. Start with one process whose owner can answer the questions and whose exceptions are known enough to test.

## Keep the knowledge behind the boxes

The purchase-request example exposes a limitation that became increasingly important as this project developed. A task label such as “Review request” is a heading for knowledge. It does not contain the criteria, judgment, evidence, authority, escalation route, and exception handling needed to perform the task. The diagram is a view of a process record, and the quality of that record limits the quality of the view.

This is why the later work moved toward a Process Narrative Specification. The name describes a shared structure for capturing the process in enough detail to support review and multiple representations. It should hold the actors, inputs, decisions, rules, controls, outputs, measures, exceptions, evidence, and handoffs that a visual necessarily compresses.

The narrative and the diagram remain distinct representations. They can refer to the same stable identifiers and be maintained together. Regenerating an image from text does not prove that the image preserved every important meaning in the narrative. The review still has to check what was selected, omitted, and implied.

That gives knowledge custody a practical role. In this project, [Notion](https://www.notion.com) provided an editorial home for drafts, consolidation, and the evolving record. GitHub preserved public source files and publication receipts. The article surfaces presented the argument to readers. Each had a job. Confusion arose when a working copy or historical receipt sounded like the current authority without clearly identifying its status.

A connection between tools can make reading and writing possible. It does not establish automatic synchronization, complete decision lineage, or agreement between every page. A skill can package a repeatable set of instructions. It does not guarantee that every host has the required tools, permissions, or execution behavior. These boundaries are mundane, which is precisely why they are easy to skip in an exciting demonstration.

For business use, I would make custody explicit. Name the authoritative process record. Identify the views derived from it. Record each view's owner, audience, revision, and last verification. Keep an unresolved question visibly unresolved. When a change is accepted, retain enough rationale to distinguish a deliberate decision from an accidental edit.

[Replit](https://replit.com) contributed a different lesson. I initially approached it with expectations shaped by chat-based tools. Its value became clearer as I learned to use a build environment that could work with files and executable behavior. That late discovery belongs to the author's learning curve and to Replit's specialty role. It should not be retroactively described as an equal-condition victory over the original participants.

The practical question expanded from whether an answer sounded convincing to whether the work survived contact with a repository, a rendered interface, and an observable result. A running preview, a committed change, and a published application are separate states. A team needs to know which one it has. The same distinction applies to documentation: drafted, reviewed, approved, and distributed are different claims.

The BPMN for Mermaid work grew out of the question of how much process meaning a textual model could carry. The public project documents a technical prototype and a bounded descriptive subset. Alongside it, BP-SKILL supplies fifteen core Agent Skills for process-documentation work, with supplemental packages distinguished in the repository. The shared Process Narrative Specification is intended to connect capture, analysis, modeling, review, and handoff. [Project and current boundaries](https://overkillhill.com/projects/bpmn-for-mermaid/)

The near-real-time workflow I am pursuing starts with a conversation about actual work. An authorized transcript or notes become a structured process record. A visual view is generated from that record. The person who performs the work can challenge an invented handoff, a missing exception, or a misleading order while the conversation is still fresh. The record and the visual return through the same correction loop.

That complete loop remains a direction. The current project is not a claim of full BPMN 2.0 conformance, BPMN XML round-tripping, or an executable process engine. Portable instructions and a descriptive prototype should be evaluated within their actual scope. Any move toward execution introduces additional questions about permissions, decision authority, validation, monitoring, and failure handling.

For a corporate strategy audience, the larger opportunity is continuity. Knowledge often fragments between a meeting, a document, a slide, and the person who remembers why the slide looks that way. A structured record with linked views offers a way to make those relationships inspectable. It requires governance proportionate to the process and a maintenance habit that survives the original author.

That is a more demanding objective than making an impressive picture. It is also a more useful one.

## Make visual consistency serve the work

Once a team can generate diagrams quickly, inconsistency becomes visible quickly too. Two views of the same process may use different colors, shapes, fonts, spacing, or direction. Some differences help explain different tasks. Others force the reader to relearn a visual vocabulary without gaining new information. The picture renders, but it looks as though a different department commissioned every page.

That is the next translation tax. We reduced the effort of drawing the relationships, then spent the saving asking the agent to make them look like something we would actually use. Change the blue. Increase the labels. Keep the exceptions orange. Restore the shape it changed while fixing the font. A styling conversation can gradually become another diagramming project.

The frustration is familiar, but its cause needs separating into layers. The generating model chooses source syntax and may invent or omit style instructions. Mermaid interprets that source using its configuration and available diagram features. The destination decides which renderer, settings, fonts, and embedding behavior are available. Finally, the exported image or document imposes its own size and background. An unwanted result can originate at any of those layers.

That distinction applies whether the conversation starts in ChatGPT, Claude, Copilot, Gemini, Perplexity, or another assistant. It does not establish that they all make the same mistakes or expose identical controls. The weakness I want to address is the workflow: when preferences are missing from the active task, the assistant and renderer have to fill the gaps. A fresh conversation is a poor place to renegotiate a visual identity that the user already settled last Tuesday.

Defaults are choices too. Mermaid's current documentation describes different theme and look defaults for different diagram families and changes between releases. It also documents customization through the base theme and theme variables, including hexadecimal colors and font settings. Consequently, “use Mermaid” is not a complete appearance specification. State the intended configuration and check it in the actual destination. [Mermaid theme configuration](https://mermaid.js.org/config/theming.html)

My work on Mermaid Theme Builder grew out of that practical irritation. The project provides a workbench for applying themes to existing Mermaid source, previewing choices, and preparing exports. Its documented outputs include palette JSON, CSS custom properties, styled source, and prompt scaffolds, with examples and renderer guidance. Those are concrete ways to make a visual choice reusable. They are not evidence that every exported setting will survive every host. [Theme Builder project](https://overkillhill.com/projects/mermaid-theme-builder/) · [Documented exports](https://github.com/OKHP3/mermaid-theme-builder#exports)

The lesson I take from that work is broader than choosing a palette. Once a person has found a useful combination of color, typography, shape conventions, and layout preferences, those decisions should become an input to the next task. The workbench helps discover and inspect the choices. A personal Agent Skill could carry the chosen rules into generation, before the first source file exists. A plugin could package that workflow for a host that supports it.

I would therefore treat Theme Builder and a personal styling skill as complementary. Use the visual workbench to decide what good looks like and inspect what the target can reproduce. Use the skill to recall that decision, select a relevant example, and constrain the next draft. Return to the workbench when the result or destination needs inspection. The aim is fewer avoidable correction turns, with the design decision made once and reused deliberately.

Consistency still has to serve meaning. In the purchase-request example, an exception should remain recognizable across the overview, the detailed procedure, and the training material. If amber means “requires attention” in one view, it should not casually mean “approved” in the next. A profile can preserve that vocabulary while allowing each view to show the amount of detail its audience needs.

## Package the preference so the next prompt can use it

A personal styling skill could be a small, understandable package. I would give it an entry instruction, one named preference profile, examples for the supported diagram families, and a short compatibility record. Optional scripts would handle repeatable transformations and checks. This is a proposed design for the workflow, not a claim that a universal personal-theme installer has already been delivered by Theme Builder.

The Agent Skills specification provides a suitable container: a SKILL.md entry file with metadata and instructions, plus optional scripts, references, and assets. Script execution and supported languages depend on the agent implementation. That establishes a packaging option; it does not make every chat product capable of discovering, loading, or running the package. [Agent Skills specification](https://agentskills.io/specification)

The entry instruction should say when to use the skill and what it governs. For example: use this profile when generating or restyling Mermaid diagrams for my operational documents; preserve supplied process facts and identifiers; choose a compatible family example; apply the profile; disclose any styling fallback. It should also say what counts as completion: source provided, configuration identified, and rendering either inspected in a named environment or explicitly unverified.

The preference file could be JSON because structured values are easier to inspect and apply consistently than several paragraphs of adjectives. I would separate identity, visual tokens, semantic roles, layout preferences, and output requirements. A profile name such as “operations-light” identifies the intended use. A revision identifies which agreed choices the diagram used. Neither is a replacement for recording the process revision represented by the diagram.

For a concrete illustrative palette, the profile might specify background #FFFFFF, text #172A3A, ordinary process fill #E8F2F4, process border #176B78, and attention fill #FFF0CC. These are example design choices, not the user's approved palette or a claim of measured accessibility. A text label would accompany the attention color. The package should identify the intended color pairs so a contrast check evaluates the actual combinations used.

Typography needs equally explicit choices. A profile might prefer Arial with a generic sans-serif fallback, a readable node-label size, and a larger title where the family supports a title style. A font-family name does not install or embed the font. The destination must have access to it, or use a disclosed fallback. The agent should report a substitution rather than claiming exact brand fidelity because the source contains the preferred name.

Semantic roles deserve their own mapping. “Process,” “decision,” “exception,” “external party,” and “unresolved” describe why an element looks different. The profile can map each role to permitted fills, borders, shapes, and labels. That is more useful than supplying five attractive colors and allowing the model to assign fresh meanings every time. It also lets someone change the palette without changing what an exception means.

Layout preferences should express intent with room for the facts. Prefer left-to-right for a short sequence; permit top-to-bottom when an article column makes the horizontal view unreadable. Keep decision labels concise, label consequential branches, and avoid forcing every subgraph into the same width. Those are proposed design rules. They should guide presentation without dropping a real exception just to make the diagram fit a template.

The profile also needs an explicit precedence rule. I would use the user's current request first, then an applicable organizational design requirement, then the selected personal profile, then the diagram-family defaults. If those requirements conflict, expose the conflict. An instruction to prepare a monochrome handout should override a preference for an elaborate color palette. A personal preference should not quietly change a control's meaning or override the task's acceptance conditions.

The examples would give the agent something concrete to follow. Store an editable Mermaid source beside an approved render and a note explaining its intended use, renderer conditions, and known limitations. Include a short ordinary case and a case with an exception. The source supplies syntax and configuration; the image supplies a visual target for a host that can inspect images. Neither should be treated as proof that an unseen destination will render identically.

Avoid putting a real client workflow into a reusable style example. A fictional request and generic role names are enough to demonstrate the pattern. The personal package should carry the user's design choices, not an accidental collection of business facts copied into every future conversation. The diagram's task context can be supplied separately, keeping preference reuse distinct from information disclosure.

This is where the package starts to save attention. The user no longer needs to remember the preferred border color, repeat the font request, or describe the same exception style in every prompt. The agent has a declared reference to retrieve. A failure to follow it becomes a specific mismatch with an inspectable rule, rather than another round of “make it look more professional.”

## Give each diagram family an example it can actually follow

One attractive flowchart is not a template for the whole Mermaid language. A flowchart models routes and decisions. An architecture view emphasizes services, groups, and connections. A fishbone diagram organizes possible causes around an effect. A Venn diagram expresses set relationships. They need a shared visual identity and different instructions about how to preserve their meaning.

The current Mermaid documentation includes dedicated architecture, Venn, and Ishikawa/fishbone syntax. Venn and Ishikawa are documented as newer types whose syntax may evolve. A package should therefore declare the Mermaid version and host conditions under which each example was checked, then select examples the destination can support. Native syntax in current documentation does not prove that an embedded renderer has been upgraded to include it. [Architecture](https://mermaid.js.org/syntax/architecture.html) · [Venn](https://mermaid.js.org/syntax/venn.html) · [Ishikawa](https://mermaid.js.org/syntax/ishikawa.html)

For flowcharts, I would include a template with ordinary work, a decision, a return path, and a visibly unresolved condition. In the purchase-request example, DEC-01 and DEC-02 must remain separate even if the theme uses the same decision shape for both. The preferred palette can make the two decisions look related. It cannot make completeness equivalent to approval.

For architecture diagrams, the exemplar should distinguish a component from a boundary and a connection from an ordered step. If a desired icon is unavailable, a clear text label is an acceptable declared fallback. Replacing a missing service symbol with something that suggests a different service is a semantic change. Styling instructions should never promote an attractive substitute above an accurate description.

For a fishbone example, the style rules should keep the stated problem and categories readable while allowing enough space for contributing causes. The content rules should distinguish a proposed cause from one supported by evidence. A beautifully organized fishbone can make speculation look settled; an exemplar can teach the agent to keep that uncertainty in the labels or adjoining explanation.

For a Venn example, the package should explain what membership and overlap mean. Reusing the attention color for an overlap should not imply risk unless risk is actually the subject. If area carries quantitative meaning, the source needs the relevant quantities and the chosen rendering must be suitable for that claim. A template that merely looks like three overlapping circles is not automatically an appropriate quantitative model.

Sequence, state, and entity-relationship examples could extend the library as actual work demands them. Start with the families the person regularly uses. Each added family introduces syntax, style mappings, and maintenance responsibilities. A small collection of understood examples is a better operational starting point than a large catalog whose compatibility has never been inspected.

There is a practical limit to the CSS analogy. A portable profile can resemble a stylesheet by centralizing colors and typography, but its values still need translation into the chosen diagram's supported controls. Mermaid flowcharts provide classDef for reusable node styling; their documentation warns that external CSS may be overridden by Mermaid's own scoped styles. A flowchart class recipe should not be copied into every other family on the assumption that the syntax is universal. [Flowchart styling](https://mermaid.js.org/syntax/flowchart.html#classes)

Theme Builder makes this distinction concrete: its CSS export is a set of static design tokens for handoff, not a runtime Mermaid theme. A personal skill would need to map those values into supported Mermaid configuration or diagram statements. Attaching the CSS file alone would not perform that translation. [CSS export implementation](https://github.com/OKHP3/mermaid-theme-builder/blob/main/src/lib/exporters.ts)

Theme variables, diagram-specific statements, and host-level CSS are different mechanisms. Mermaid's configuration schema includes themeCSS, but a configuration option is not proof that a particular integration exposes it. I would have the package prefer supported theme settings, use family-specific styling where appropriate, and reserve CSS overrides for a destination where their behavior has been checked. The export should record which route it took. [Mermaid configuration schema](https://mermaid.js.org/config/schema-docs/config.html)

When the requested family is unavailable, the skill needs a fallback policy. It could provide the native source for use in a compatible renderer, offer an approved static export, or propose another representation that preserves the relevant meaning. It should identify an approximation as an approximation. Silently drawing a generic flowchart and calling it a Venn diagram would solve the rendering error by creating a communication error.

The same discipline applies to consistency itself. A font substitution, a different line break, and a missing exception are different classes of defect. Record them separately. The first may be an acceptable compatibility compromise; the second may need layout review; the third changes the process. A styling skill should make those distinctions easier to manage, not hide them under a single “looks good” verdict.

## One prompt for the user, a repeatable workflow for the agent

The desired interaction can be short: “Use my operations-light diagram skill to show this purchase-request process as a flowchart for our documentation page. Preserve DEC-01 and DEC-02, show the missing-evidence return path, and use the profile's exception style.” The process facts would accompany the request. The person supplies the purpose and the variation; the package supplies the already-agreed visual conventions.

Behind that short request, the agent still has work to do. Load the named profile and relevant family example. Establish the destination constraints. Generate the model from the supplied facts. Apply the permitted style mappings. Inspect the source for unsupported or omitted settings. Render and inspect the result when tools permit it. Return the source, the result, and any material compatibility exception. A single user prompt can initiate several internal steps.

An optional Python helper could make the repetitive parts more deterministic. It could read the JSON profile, check expected keys and hexadecimal values, choose a reviewed template, and emit configuration using the correct serialization rules. It could also compare requested tokens with generated source and flag an unexplained color or missing profile identifier. Those are proposed helper responsibilities, not a claim that a Python file can understand every diagram's correctness.

A helper would need more care when modifying existing source. Blindly inserting another configuration header or appending duplicate style statements can create conflicts. I would require it to recognize the supported input structure, preserve the diagram content, and stop when it cannot safely reconcile existing settings. A source difference should show whether the operation changed presentation, meaning, or both. The task owner should not discover a deleted branch during a palette review.

Python is also not the Mermaid renderer. A host could permit profile reading but prohibit script execution, or support execution without having a compatible rendering tool. In those cases the skill can still supply the preferred source and explain which check was unavailable. It must not say that the image was inspected merely because a helper successfully wrote a file.

A plugin could bundle the skill, preference editor, examples, and a rendering or validation tool into a more convenient installation. That would make sense for a supported host and a recurring workflow. Where native skills are available, invocation can use the host's skill mechanism. Elsewhere, an attached profile and example, or the relevant instructions supplied explicitly, may provide a simpler adaptation. These are deployment choices to verify in the chosen product, not a promise of identical installation across major platforms.

The portable part is the user's intent and the reusable assets. Discovery, context loading, tool execution, and rendering remain host responsibilities. An agent that cannot access the named package should say so before inventing its contents. An agent that can read the package but cannot run its script should use the documented manual path. “The skill was installed” and “the skill governed this output” are different claims.

I would keep the ordinary response concise: the diagram, its editable source, the profile used, and any deviation that matters. The user does not need a paragraph explaining a successful hex-color check. They do need to know that a requested font was substituted or that the preview used a different renderer from the destination. The implementation details should earn their place by affecting a decision.

This approach aims to make the first result closer to the user's intended appearance. It does not promise a correct or beautiful diagram from every single prompt. The process facts may still be incomplete, the layout may be awkward, or the destination may impose a constraint the profile cannot overcome. Those are reasons for targeted revision. Repeating the same known color and font preferences should become the exception.

The two historical figures in this article remain unchanged. Their surrounding text explains the consequential relationships and defects, and the full-resolution originals and source remain available. A new styled teaching version would be labeled as a derivative. That distinction keeps an improved presentation from rewriting the evidence of what the original systems produced.

For ongoing use, give the personal package an owner and retain its prior revision. Recheck the relevant examples after changing a palette, font, diagram-family rule, or renderer. A corporate team can share an approved baseline while allowing explicit personal or publication profiles where appropriate. The principle is the same as the process record: keep the governing choices inspectable, then regenerate and review their dependent views.

The opportunity is practical. Theme Builder helps make the design decision visible. A skill or plugin can make that decision available at the moment the next diagram is requested. Together, they offer a path toward spending fewer turns negotiating appearance and more attention checking whether the picture tells the truth.

## Measure the work and keep the limits visible

The Council case makes a method inspectable. It does not establish that the method is always worth its cost. That next question needs an evaluation designed around a business task, a baseline, and an observation window. A credible pilot can be small, provided its claims stay as small as its evidence.

Choose a process with a willing owner, known examples, and manageable consequences. Define the audience and the decisions readers must make. Preserve the current explanation as the baseline. Prepare reference answers from the domain record before measuring performance. A reviewer should not change the definition of success after seeing which version looks better.

Measure correctness first. Did readers identify the right actor, route the request properly, and recognize the exception? Record the kinds of errors as well as their frequency. An omitted escalation route may matter more than several minor wording mistakes. The business owner should declare which errors prevent acceptance for the chosen scope.

Then measure effort. Capture the author's preparation time, reviewer time, reader task time, and correction time separately. That separation makes tradeoffs visible. A more expensive explanation may be justified for repeated use. A faster generation process may be a poor bargain if every reader needs a guided tour. The total work matters more than the dramatic part of the demonstration.

Test maintenance by introducing a known change. In the purchase-request example, revise the authority rule and observe how reliably the narrative, diagram, captions, and reader tasks are updated. This exposes a cost that first-use demonstrations often hide. A view that is easy to create and difficult to keep accurate can be an expensive source of false confidence.

Keep comparisons fair enough for the decision. Similar readers should receive comparable tasks and the same underlying facts. If the same person tries both versions, learning from the first attempt can affect the second. Change the order where practical and acknowledge the limitation. A small internal pilot can guide a local choice; it should not be advertised as a universal study.

The pilot also needs an effort budget. If a Council consumes considerably more review time than a single draft plus domain review, that additional cost belongs in the comparison. More generated alternatives can increase the burden of choosing among them. The test is whether they expose enough useful differences to justify that burden for this task.

Evaluate the styling package on that same basis. Compare equivalent diagram tasks with ordinary prompting and with the selected profile available at the start. Record first-result adherence to the agreed visual rules, styling correction turns, elapsed effort, rendering failures, and semantic defects separately. A reduction in color corrections is useful only if the process remains accurate. Include the time spent creating and maintaining the profile, spread across a stated number of uses. This would test the proposed benefit of Theme Builder plus a personal skill without pretending that the original Council experiment already measured it.

Research on model evaluation reinforces the need for care. Zheng and colleagues examined model-based judging and documented sensitivity to factors such as response position and verbosity in their evaluated settings. Their discussion of self-enhancement bias was inconclusive, so it would be inaccurate to treat that particular concern as a settled finding from the paper. The practical implication here is to use model review as evidence to inspect, with source checks and human adjudication. It does not validate the Council's scores. [Research: LLM-as-a-judge](https://arxiv.org/html/2306.05685v4)

Huang and colleagues studied intrinsic self-correction on reasoning tasks and found important limits when models attempted correction without external feedback. This Council exercise includes peer material and human feedback, so its conditions differ. The useful connection is a question for our workflow: what new evidence does a revision receive? Asking the same system to reconsider an answer may produce a different explanation without supplying a reason to trust it more. [Research: intrinsic self-correction](https://arxiv.org/abs/2310.01798)

Both papers concern particular tasks and model generations. They inform evaluation design and caution; they do not establish the present-day behavior of every tool in this article. Likewise, provider documentation can establish a feature's stated availability, while the business benefit of using it requires its own evidence. A feature announcement and an operational outcome are different sources of knowledge.

The principal limitations of the original case remain straightforward: unequal product conditions, evolving prompts, peer exposure before V2, my own role in both direction and judgment, incomplete raw scoring provenance, sparse audience participation, and no controlled reader-comprehension comparison. The preserved outputs are rich enough to teach from. They are not a shortcut around those limitations.

For a decision maker, the responsible conclusion is conditional. Try the method where ambiguity and consequences make structured challenge valuable. Keep it if the pilot improves the relevant work at an acceptable total cost. Simplify it if ordinary review performs just as well. Stop if the process creates more ceremony than understanding.

## Explore the tools and reusable methods

**Skillz Forge:** [project and approach](https://overkillhill.com/skillz-forge/) · [browse the skill catalog](https://okhp3.github.io/skillz/).

**Mermaid Theme Builder:** [project and styling workflow](https://overkillhill.com/projects/mermaid-theme-builder/) · [open the workbench](https://okhp3.github.io/mermaid-theme-builder/).

**BPMN for Mermaid:** [process-knowledge project](https://overkillhill.com/projects/bpmn-for-mermaid/) · [explore the application](https://okhp3.github.io/mermaid-diagram-bpmn/).

**Mermaid:** [open-source overview](https://mermaid.ai/open-source/) · [upstream code and contributions](https://github.com/mermaid-js/mermaid).

**Agent Skills:** [format and ecosystem](https://agentskills.io/home) · [upstream specification repository](https://github.com/agentskills/agentskills).

**Working tools:** [Replit](https://replit.com) for building and iteration; [Notion](https://www.notion.com) for editorial organization and knowledge custody.

**Topics:** #OverKillHill #SkillzForge #MermaidThemeBuilder #BPMNForMermaid #Mermaid #AgentSkills #Replit #Notion #ProcessImprovement #VisualCommunication

## Evidence routes

The public record lets readers examine the case without treating this narrative as its own proof. The [project repository](https://github.com/OKHP3/first-diagram-is-a-liar) holds the preserved brief, prompts, source files, renders, and publication records. The [diagramming archive](https://github.com/OKHP3/first-diagram-is-a-liar/tree/main/archive/diagramming-shootout) provides the broader comparison field, while the [manifest](https://github.com/OKHP3/first-diagram-is-a-liar/blob/main/archive/diagramming-shootout/diagram-manifest.csv) identifies the source/render relationships.

The [earlier competition capture](https://github.com/OKHP3/first-diagram-is-a-liar/blob/main/archive/legacy-exports/final-competition.txt) supports the source-stage distinction discussed for Copilot. Original diagram rounds and historical publication records retain their labels. Their preservation allows corrections to the interpretation without silently changing the primary artifacts.

The current publication homes are the [website article](https://overkillhill.com/writings/first-diagram-is-a-liar/) and [LinkedIn article](https://www.linkedin.com/pulse/first-diagram-usually-liar-jamie-hill-lv3hc/). The linked research and provider sources above support their specific surrounding statements. None should be read as an endorsement or validation of the whole project.

## Start with one process and an honest question

The easiest way to misuse this work is to turn it into a requirement that every explanation needs a diagram and every diagram needs a Council. That would create more administration while ignoring the question that started the experiment: what did the words buy?

Choose one process that people repeatedly misunderstand. Find the owner and a person who performs it. Write down the task, the source facts, the exceptions, and the unresolved questions. Create a first view, then ask a reader to use it. When the reader takes the wrong path, investigate the path before polishing the picture.

If several interpretations remain plausible, use comparison to expose them. Give reviewers a purpose, a bounded source set, and a clear output. Ask them to identify a consequential omission and the evidence that would settle it. Preserve disagreement long enough for a human with authority to make a reasoned decision.

Link the accepted view to the knowledge it compresses. Name the maintenance owner. Record the decision conditions and the changes that should reopen review. Then measure whether the result helps people do the work. A process record that nobody can maintain is already beginning to become historical, however recently it was published.

The useful shift I experienced was the ability to put an imperfect model in front of people while it was still cheap to change. Mermaid made structure editable. The Council made alternative interpretations visible. Human judgment decided what to keep. The later work on process documentation made the missing depth harder to ignore.

A reusable visual profile would carry another part of that learning forward: the appearance choices already made. Bring them into the next prompt so attention can return to the process, its exceptions, and its meaning.

Together, those experiences suggest a practical discipline: make the claim visible, inspect its source, challenge the exceptions, and keep the meaning connected to the picture. The tools can change. The responsibility survives.

The first diagram is allowed to be wrong. It becomes dangerous when its polish discourages the questions that would correct it.

Make it earn its space. Otherwise, it's wallpaper.
