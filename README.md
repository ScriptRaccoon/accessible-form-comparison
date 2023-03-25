# Accessible Forms

This repository includes two forms which are very similar, but one is accessible while the other one is not.

-   https://accessible-form.netlify.app
-   https://inaccessible-form.netlify.app

The accessible form has the following features, which are missing in the inaccessible form:

-   semantic HTML tags (heading, button, form)
-   page regions (header, section)
-   add alt text for images
-   labels for inputs
-   inputs of type email and password (not just text inputs)
-   remove placeholders (since they are inaccessible)
-   add outlines for interactive elements
-   ensure high contrast for info text
-   link the form description with aria-describedby
-   use aria-live for error message
-   hide decorative images via aria-hidden
-   accessible indicators for required fields
-   rem units instead of pixel units

All this makes the form suitable for keyboard navigation and screenreaders.

This repository will be used for a tutorial on web accessibility.

## Automatically detected issues

I tried out some tools to see if they find all the issues in the inaccessible version.

The following issues were found by Google Lighthouse:

-   Images do not have `alt` attributes
-   Background and foreground colors do not have a sufficient contrast ratio.

Firefox detects much more, and these are actually the most important ones:

-   Content with images must be labelled
-   Color and contrast
-   Focusable element may be missing focus styling
-   Form elements should have a visible text label
-   Clickable elements must be focusable and should have interactive semantics

The tool https://www.accessibilitychecker.org/ detects the issues of Chrome and the missing labels.

The tool https://wave.webaim.org/ detects the following issues:

-   Missing alt text
-   Missing labels
-   Low contrast
-   Now heading
-   No page regions

No tool detected all issues. That being said, manual testing is always necessary. The checklist by the a11y project can be used for this purpose: https://www.a11yproject.com/checklist/
