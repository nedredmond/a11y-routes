# a11yref.link

This allows programmatic redirects to the WCAG 2.X spec.

## Usage

Add the spec to the URL like so: `/#/wcag22/1` to go to the first WCAG principal, or `/#/wcag22/1/1/1` to go to the first success criterion.

You can also use the names of principles, guidelines, and criteria, like so: `/#/wcag22/robust/compatible/name-role-value`

You can also use the names of principles, guidelines, or criteria by themselves: `/#/wcag22/readable` or `/#/wcag22/target-size-minimum`

You can also mix and match numbers and names if you are feeling wild, like so: `/#/wcag22/4/compatible/1`

To link directly to the latest spec, skip the version: `/#/wcag/1/1/1`

> [!NOTE]
> Currently, only WCAG 2.2 is supported. If there is interest, I can add support for WCAG 2.1 and 2.0. While I would like to additionally support ARIA, ATAG, and other standards, those do repositories do not include a JSON representation and would require a lot of parsing of HTML.

## Motivation

When trying to reference accessibility issues in documentation, code comments or reviews, etc., it's often useful to link to the WCAG spec. However, the WCAG spec is not very friendly to link to-- even if I know the number corresponding to the principle, guidelines, or success criterion, you have to search the document for the relevant section, then copy the URL with the ID.

This project provides a simple way to link to the WCAG spec, using a URL scheme that's easy to remember and type-- or access programmatically.

## Inspiration

This project is inspired by the site for the common core standards, [corestandards.org](http://corestandards.org). They once had a similar feature, but it seems to have been removed for the time being. I am aware of it from the examples for structured data for [the Learning Video schema on Google's developer documentation](https://developers.google.com/search/docs/appearance/structured-data/learning-video).

It looked something like this: `https://www.corestandards.org/Math/Content/HSA/SSE/#CCSS.Math.Content.HSA.SSE.B.3`
