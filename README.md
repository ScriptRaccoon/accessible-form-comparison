# Accessible Forms

This repository includes two forms which are very similar, but one is accessible while the other one is not.

-   https://accessible-form.netlify.app
-   https://inaccessible-form.netlify.app

The accessible form has the following features, which are missing in the inaccessible form:

-   semantic HTML tags (heading, button, form)
-   page regions (header, main, section)
-   add alt text for images
-   labels for inputs
-   inputs of type email and password (not just text inputs)
-   remove placeholders (since they are inaccessible)
-   add outlines for interactive elements
-   make input borders clearly visible
-   ensure high contrast for info text
-   link the form description with aria-describedby
-   use aria-live for error message
-   hide decorative images via aria-hidden
-   accessible indicators for required fields
-   rem units instead of pixel units
-   handle email and password error individually and link them to the respective fields via aria-describedby
-   clear action text on the login button
-   bring the login button close to the input fields

All this makes the form suitable for keyboard navigation and screenreaders.

This repository will be used for a tutorial on web accessibility.

## Automatically detected issues

I tried out some tools to check if they find all the issues of the inaccessible form.

### Issues found by [Google Lighthouse](https://github.com/GoogleChrome/lighthouse)

-   Images do not have `alt` attributes
-   Background and foreground colors do not have a sufficient contrast ratio.

### Issues found by [Firefox Accessibility checker](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/)

-   Content with images must be labelled
-   Color and contrast
-   Focusable element may be missing focus styling
-   Form elements should have a visible text label
-   Clickable elements must be focusable and should have interactive semantics

### Issues found by [Accessibility Checker](https://www.accessibilitychecker.org/)

-   Images do not have `alt` attributes
-   Background and foreground colors do not have a sufficient contrast ratio.
-   Form elements should have a visible text label

### Issues found by [WAVE](https://wave.webaim.org/)

-   Missing alt text
-   Missing labels
-   Low contrast
-   Now heading
-   No page regions

### Issues found by [axe DevTools](https://www.deque.com/axe/devtools/)

-   Elements must have sufficient color contrast
-   Images must have an alternative text
-   Document should have one main landmark
-   All page content should be contained by landmarks
-   Page should contain a level-one heading

No tool detected all issues. That being said, manual testing is always necessary.

## Resources

-   Accessibility checklist: https://www.a11yproject.com/checklist/
-   How to Meet WCAG (Quick Reference): https://www.w3.org/WAI/WCAG21/quickref/
-   ARIA Authoring Practices Guide: https://www.w3.org/WAI/ARIA/apg/
