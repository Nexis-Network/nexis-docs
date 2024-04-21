---
title: System Design Proposals
sidebar_label: Overview
---

Changes to the Nexis Network architecture are performed through a public proposal process (via pull requests) on the [Nexis Network GitHub repository](https://github.com/nexis-labs/nexis). New proposals should be submitted with the "[Submit a Design Proposal](#submit-a-design-proposal)" guide below.

There are currently two different states of these design proposals:

1. [Accepted Proposals](./proposals/accepted-design-proposals.md)
2. [Implemented Proposals](./implemented-proposals/index.md)

## Accepted Proposals

These architectural proposals have been accepted by the Nexis Network team, but are not yet fully implemented.

Each proposal may be implemented as described, implemented differently as issues in the designs become evident, or not implemented at all. If implemented, the proposal will be moved to [Implemented Proposals](./implemented-proposals/index.md) and the details will be added to relevant sections of the docs.

## Implemented Proposals

These architectural proposals have been accepted and implemented by the Nexis Network team.

Any designs that may be subject to future change are noted in their specific proposal page.

## Submit a Design Proposal

To submit a new design proposal for Nexis Network:

1. Propose a design by creating a PR that adds a markdown document to the `docs/src/proposals` directory.
2. Add any relevant Nexis Network maintainers to the PR review.
3. Publish the PR for community review and feedback.

> **NOTE:** All people submitting PRs to the Nexis Network repo should consult the [CONTRIBUTING](https://github.com/nexis-labs/nexis/blob/master/CONTRIBUTING.md) doc in the repo.

### After Accepted

Once a design proposal has been accepted, the PR will be merged into the `master` branch of the Nexis Network repo. This also signifies the maintainers support your plan of attack.

> **NOTE:** The merging of the PR will **automatically** create a link in the "Accepted Proposals" table of contents sidebar.
> Once approved, continue to submit PRs that implement the proposal. When the implementation reveals the need for tweaks to the proposal, be sure to update the "accepted proposal" document and have these changes reviewed by the same approving maintainers.

### After Implemented

After a proposal has been fully implemented into the Nexis Network architecture, a PR should be created to perform the following:

1. Move the newly implemented proposal file from `docs/src/proposals` to `docs/src/implemented-proposals`
2. Create a new redirect in the `publish-docs.sh` to redirect the old `accepted` proposal page to the new `implemented-proposal` page
3. Publish the PR

> **NOTE:** Moving the proposal document into the `implemented-proposals` directory will **automatically** move the link in the "Accepted Proposals" table of contents sidebar to the "Implemented Proposals" sidebar.