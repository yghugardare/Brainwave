# Brainwave

## Developer Documentation

### Table of Contents

| No. | Topic                                                                 |
| --- | --------------------------------------------------------------------- |
| 1   | [Setup and Tailwind Configuration](#setup-and-tailwind-configuration) |
| 2   | [Reusable Button Component](#reusable-button-component)                                                     |
| 3   | [Topic3](#topic3)                                                     |
| 4   | [Topic4](#topic4)                                                     |
| 5   | [Topic5](#topic5)                                                     |

## Setup and Tailwind Configuration

<details>
 <summary>Themes [line 11]</summary>

### Need for Adding Custom Configuration
Adding custom configurations to the `tailwind.config.js` file allows you to:
1. **Maintain Consistency**: Define a consistent design system with specific colors, fonts, spacing, etc., across your project.
2. **Easily Reuse Styles**: Reuse custom styles throughout your project without redefining them.
3. **Extend Functionality**: Tailwind CSS provides a lot of utility classes by default, but sometimes you need custom values to meet specific design needs.

### Using Custom Configurations in a Project
After adding custom configurations in the `tailwind.config.js` file, you can use them directly in your project’s CSS classes.

### Example Code
Here’s how you can use the custom color and background image defined in your configuration within a React component:

#### 1. `tailwind.config.js`
Already defined custom configurations:
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        color: {
          1: "#AC6AFF",
          // other colors...
        },
        // other color definitions...
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
        'benefit-card-1': "url(assets/benefits/card-1.svg)",
        // other background images...
      },
    },
  },
  plugins: [],
}
```

#### 2. Using Custom Colors and Background Images in a React Component
```jsx
import React from 'react';

const CustomComponent = () => {
  return (
    <div className="p-4">
      {/* Using custom color */}
      <div className="bg-color-1 text-white p-4 rounded">
        This div has a custom background color and white text.
      </div>

      {/* Using custom background image */}
      <div className="bg-benefit-card-1 h-64 bg-cover bg-center mt-4">
        This div has a custom background image.
      </div>

      {/* Using radial gradient background */}
      <div className="bg-radial-gradient from-color-1 via-color-2 to-color-3 h-64 mt-4">
        This div has a radial gradient background.
      </div>
    </div>
  );
};

export default CustomComponent;
```

### Explanation
- **Custom Color**: The `bg-color-1` class applies the custom color `#AC6AFF` as the background color.
- **Custom Background Image**: The `bg-benefit-card-1` class applies a custom background image (`assets/benefits/card-1.svg`).
- **Radial Gradient Background**: The `bg-radial-gradient` class applies a radial gradient background with the specified colors.

### How It Works
- Tailwind CSS processes the `tailwind.config.js` file and generates the necessary CSS based on the custom configurations.
- When you use the custom classes (`bg-color-1`, `bg-benefit-card-1`, etc.) in your components, Tailwind applies the corresponding styles.

Feel free to ask more questions or for further examples if needed!

</details>

<details>
 <summary>Plugins [line 86]</summary>

### What are Tailwind Plugins?

Plugins in Tailwind CSS are a way to extend Tailwind's core functionality. They allow you to add custom styles, components, utilities, or even entirely new features. Tailwind's plugin system is flexible and lets you create reusable styles that can be shared across your project.

### Difference Between Base Styles, Component Styles, and Utility Styles

1. Base Styles:

- Purpose: Provide foundational styles directly to HTML elements.
- Usage: Applied globally and set the default look and feel for elements.
- Example: Setting a default font for all headings or body text.

2. Component Styles:

- Purpose: Define reusable styles for specific components.
- Usage: Applied via class names to create consistent design patterns for components.
- Example: Creating a button style that can be reused across different parts of the application.

3. Utility Styles:

- Purpose: Provide single-purpose classes that can be composed to create complex styles.
- Usage: Applied via class names to individual elements for fine-grained control.
- Example: Margin, padding, color, and display classes.

### Detailed Explanation

1. **Plugin Initialization**

   - `plugin(function ({ addBase, addComponents, addUtilities }) { ... })`: Defines a custom plugin. The function receives three functions (`addBase`, `addComponents`, `addUtilities`) to add base styles, components, and utilities, respectively.

2. **Base Styles**

   - `addBase({});`: Currently empty, but you can use this to add global base styles.
     But it could be something like -
   - ```
     plugin(function ({ addBase, addComponents, addUtilities }) {
        addBase({
          'h1': {
            fontSize: '2.25rem',
            fontWeight: '700',
            lineHeight: '2.5rem',
          },
          'p': {
            fontSize: '1rem',
            lineHeight: '1.5rem',
          },
        });
     ```



3. **Components**

   - `addComponents({ ... });`: Adds custom component styles.
   - **Example Components**:
     - `.container`: A utility class for a container with specific maximum width and padding values.
     - `.h1` to `.h6`: Custom heading styles with different font sizes and line heights for various screen sizes.
     - `.body-1` and `.body-2`: Custom body text styles with different font sizes, weights, and line heights.
     - `.caption`, `.tagline`, `.quote`, `.button`: Additional custom styles for captions, taglines, quotes, and buttons.

4. **Utilities**
   - `addUtilities({ ... });`: Adds custom utility classes.
   - **Example Utility**:
     - `.tap-highlight-color`: Sets the tap highlight color to transparent for a better mobile user experience.

### How to Use Custom Plugins

To use the custom classes defined in the plugin, simply add the class names to your HTML or JSX elements.

#### Example Usage in a React Component

```jsx
import React from "react";

const CustomComponent = () => {
  return (
    <div className="p-4">
      {/* Using custom container class */}
      <div className="container bg-gray-100 p-4">
        This is a custom container.
      </div>

      {/* Using custom heading classes */}
      <h1 className="h1">Custom Heading 1</h1>
      <h2 className="h2">Custom Heading 2</h2>

      {/* Using custom body text classes */}
      <p className="body-1">This is body text 1.</p>
      <p className="body-2">This is body text 2.</p>

      {/* Using custom utility class */}
      <button className="button tap-highlight-color">Custom Button</button>
    </div>
  );
};

export default CustomComponent;
```

In this example:

- The `.container` class applies the custom container styles.
- The `.h1` and `.h2` classes apply the custom heading styles.
- The `.body-1` and `.body-2` classes apply the custom body text styles.
- The `.button` class applies the custom button styles, and `.tap-highlight-color` ensures there's no tap highlight color on mobile devices.

</details>

<details>
 <summary>What are directives ?</summary>

### Directives in Tailwind CSS

**Directives** in Tailwind CSS are special instructions that you use in your CSS files to tell Tailwind how to process and generate styles. They are a key part of how you configure and extend Tailwind's default behavior.

### Common Tailwind CSS Directives

1. **@tailwind**
2. **@apply**
3. **@layer**
4. **@variants**
5. **@responsive**
6. **@screen**

#### 1. `@tailwind`
The `@tailwind` directive is used to include Tailwind's base, components, and utilities styles into your CSS.

**Usage**:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- `@tailwind base`: Includes Tailwind's base styles (like resets and global styles).
- `@tailwind components`: Includes component styles.
- `@tailwind utilities`: Includes utility classes.

#### 2. `@apply`
The `@apply` directive is used to include Tailwind utility classes directly into your custom CSS selectors. This allows you to reuse Tailwind's utility styles without adding multiple class names to your HTML elements.

**Usage**:
```css
.btn {
  @apply bg-blue-500 text-white font-bold py-2 px-4 rounded;
}
```

This creates a `.btn` class with the specified Tailwind styles.

#### 3. `@layer`
The `@layer` directive is used to organize your custom CSS into Tailwind's layers (`base`, `components`, `utilities`). This helps Tailwind to optimize and properly order your custom styles.

**Usage**:
```css
@layer base {
  h1 {
    @apply text-3xl font-bold;
  }
}

@layer components {
  .card {
    @apply bg-white shadow-lg rounded-lg p-6;
  }
}

@layer utilities {
  .rotate-15 {
    transform: rotate(15deg);
  }
}
```

#### 4. `@variants`
The `@variants` directive is used to create custom variants for your utilities.

**Usage**:
```css
@variants hover, focus {
  .text-shadow {
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
  }
}
```

This will generate `.hover:text-shadow` and `.focus:text-shadow` classes.

#### 5. `@responsive`
The `@responsive` directive is used to create responsive versions of your custom utilities.

**Usage**:
```css
@responsive {
  .custom-padding {
    padding: 2rem;
  }
}
```

This will generate responsive variants like `.sm:custom-padding`, `.md:custom-padding`, etc.

#### 6. `@screen`
The `@screen` directive is a shorthand for creating media queries.

**Usage**:
```css
@screen md {
  .text-lg {
    font-size: 1.125rem;
  }
}
```

This will apply the `.text-lg` class styles only at the `md` breakpoint and above.

### Example Usage in a CSS File

Combining these directives, you might have a CSS file like this:

```css
/* Import Tailwind's base styles */
@tailwind base;

/* Import Tailwind's component styles */
@tailwind components;

/* Import Tailwind's utility styles */
@tailwind utilities;

/* Custom styles using @apply */
.btn {
  @apply bg-green-500 text-white font-bold py-2 px-4 rounded;
}

/* Custom layers */
@layer components {
  .card {
    @apply bg-white shadow-lg rounded-lg p-6;
  }
}

@layer utilities {
  .rotate-15 {
    transform: rotate(15deg);
  }
}

/* Custom responsive utility */
@responsive {
  .custom-padding {
    padding: 2rem;
  }
}

/* Custom screen utility */
@screen md {
  .text-lg {
    font-size: 1.125rem;
  }
}
```
</details>

<details>
 <summary>Index.css</summary>

### Explanation of `index.css` Code

Let's break down the provided `index.css` file step-by-step to understand each part, why it's needed, and how it will be used in a React project.

#### 1. Importing Google Fonts

```css
@import url("https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300&display=swap");
```

- **Purpose**: These lines import custom fonts from Google Fonts. 
  - `Sora` for sans-serif text.
  - `Source Code Pro` for monospace (code) text.
  - `Space Grotesk` for grotesk text.
- **Usage**: These fonts can be used throughout your project to maintain consistent typography.

#### 2. Tailwind Directives

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- **Purpose**: These directives import Tailwind's base styles, component styles, and utility classes.
  - `@tailwind base`: Includes Tailwind's reset and base styles.
  - `@tailwind components`: Includes any component styles defined by Tailwind or custom components.
  - `@tailwind utilities`: Includes all utility classes provided by Tailwind.

#### 3. CSS Variables and Root Styles

```css
:root {
  --font-sora: "Sora", sans-serif;
  --font-code: "Source Code Pro", monospace;
  --font-grotesk: "Space Grotesk", sans-serif;
  color-scheme: dark;
}

* {
  scroll-behavior: smooth;
}
```

- **Purpose**:
  - `:root` defines CSS variables for the imported fonts and sets the color scheme to dark.
  - `*` sets the scroll behavior to smooth for all elements.

#### 4. Base Layer Styles

```css
@layer base {
  body {
    @apply font-sans bg-n-8 text-n-1 text-base;
  }
}
```

- **Purpose**: The `@layer base` directive allows you to add styles to Tailwind's base layer.
  - `body`: Applies default styles to the `body` element using Tailwind's `@apply` directive.
    - `font-sans`: Applies the sans-serif font family.
    - `bg-n-8`: Sets the background color to a custom color from your Tailwind config.
    - `text-n-1`: Sets the text color to a custom color from your Tailwind config.
    - `text-base`: Sets the base text size.

#### 5. Custom Rotate Utilities

```css
.rotate-45 {
  @apply rotate-[45deg];
}

.rotate-90 {
  @apply rotate-[90deg];
}

/* Additional rotate utilities */
```

- **Purpose**: These classes define custom rotation utilities using the `@apply` directive. These are not default Tailwind utilities but custom ones added for convenience.

### Why These Styles are Needed

- **Typography**: Custom fonts are imported to ensure a consistent and unique look across the project.
- **Base Styles**: Tailwind's base, component, and utility styles provide a solid foundation and save time by reusing Tailwind's predefined styles.
- **Global Variables**: CSS variables make it easier to apply consistent styling throughout the project.
- **Smooth Scrolling**: Enhances the user experience with smooth transitions when navigating.
- **Custom Utilities**: Adding custom utilities like rotation helps avoid repetitive code and keeps the HTML cleaner.


```jsx
import React from 'react';

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Hello, Tailwind CSS!</h1>
      <p className="rotate-45 bg-blue-500 text-white p-4">
        This text is rotated by 45 degrees.
      </p>
    </div>
  );
};

export default App;
```

These styles ensure your project has a consistent look and feel while leveraging the power of Tailwind CSS for rapid development.


</details>

## Reusable Button Component

<details>

<summary>How ButtonSvg and ButtonGradient is working</summary>

### How ButtonSvg and ButtonGradient are Working Together

**ButtonSvg** and **ButtonGradient** work together to create a visually appealing button with gradient effects. Here’s a step-by-step explanation:

- **ButtonGradient** defines several linear gradients within a hidden SVG element. These gradients are stored in the `<defs>` section, which means they are not rendered directly but can be referenced by other SVG elements.

- **ButtonSvg** uses the gradients defined in **ButtonGradient** by referencing their IDs. This allows ButtonSvg to apply gradient strokes and fills to various parts of the SVG.

**How it Works Together**:
1. **ButtonGradient** is rendered once in the `App` component, ensuring that the defined gradients (`btn-left`, `btn-top`, `btn-bottom`, `btn-right`) are available for use in the SVG elements.

2. **ButtonSvg** uses these gradients by referencing their IDs (e.g., `url(#btn-left)`) to apply gradient strokes and fills to its SVG elements.

3. The **Button** component calls `ButtonSvg` within its `renderButton` and `renderLink` functions, ensuring that the SVGs with gradient effects are rendered inside the button or link.

</details>

<details>

<summary>How `ButtonSvg` References IDs from `ButtonGradient`</summary>

### How `ButtonSvg` References IDs from `ButtonGradient`

The ability for `ButtonSvg` to reference IDs defined in `ButtonGradient` is based on how SVG elements and their definitions work in the browser. Let’s break down the process:

1. **SVG Definitions and Usage**:
   - In SVG, elements like gradients, patterns, and filters can be defined in a `<defs>` section. These definitions are then referenced by other SVG elements using their IDs.
   - These definitions can be placed anywhere in the document, and as long as they are in the DOM, they can be referenced by their IDs.

2. **Global Availability**:
   - When you include `ButtonGradient` in your React component (or any HTML document), the definitions inside it become part of the DOM. They are globally accessible by any SVG element that comes after it in the DOM.

### Detailed Explanation

#### Step-by-Step Breakdown

1. **Define Gradients in `ButtonGradient`**:
   - The `ButtonGradient` component creates an SVG element with gradient definitions.
   - These gradients are given unique IDs (`btn-left`, `btn-top`, `btn-bottom`, `btn-right`).

```javascript
const ButtonGradient = () => {
  return (
    <svg className="block" width={0} height={0}>
      <defs>
        <linearGradient id="btn-left" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#89F9E8" />
          <stop offset="100%" stopColor="#FACB7B" />
        </linearGradient>
        <linearGradient id="btn-top" x1="100%" x2="0%" y1="50%" y2="50%">
          <stop offset="0%" stopColor="#D87CEE" />
          <stop offset="100%" stopColor="#FACB7B" />
        </linearGradient>
        <linearGradient id="btn-bottom" x1="100%" x2="0%" y1="50%" y2="50%">
          <stop offset="0%" stopColor="#9099FC" />
          <stop offset="100%" stopColor="#89F9E8" />
        </linearGradient>
        <linearGradient id="btn-right" x1="14.635%" x2="14.635%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#9099FC" />
          <stop offset="100%" stopColor="#D87CEE" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ButtonGradient;
```

2. **Render `ButtonGradient` in `App` Component**:
   - By rendering the `ButtonGradient` component in `App`, you ensure that these gradient definitions are included in the DOM.
   - They are placed with `width={0}` and `height={0}` to be invisible but still present in the document.

```javascript
import Button from "./components/Button";
import ButtonGradient from "./assets/svg/ButtonGradient";

function App() {
  return (
    <div>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Button className="mt-10">something</Button>
      </div>
      <ButtonGradient />
    </div>
  );
}

export default App;
```

3. **Reference Gradients in `ButtonSvg`**:
   - The `ButtonSvg` component uses the gradients by referencing their IDs using the `url(#id)` syntax.
   - Because the gradients are already defined in the DOM by `ButtonGradient`, any SVG elements that reference these IDs can use them.

```javascript
const ButtonSvg = (white) => (
  <>
    <svg className="absolute top-0 left-0" width="21" height="44" viewBox="0 0 21 44">
      <path
        fill={white ? "white" : "none"}
        stroke={white ? "white" : "url(#btn-left)"}
        strokeWidth="2"
        d="M21,43.00005 L8.11111,43.00005 C4.18375,43.00005 1,39.58105 1,35.36365 L1,8.63637 C1,4.41892 4.18375,1 8.11111,1 L21,1"
      />
    </svg>
    <svg className="absolute top-0 left-[1.3125rem] w-[calc(100%-2.625rem)]" height="44" viewBox="0 0 100 44" preserveAspectRatio="none" fill={white ? "white" : "none"}>
      {white ? (
        <polygon fill="white" fillRule="nonzero" points="100 0 100 44 0 44 0 0" />
      ) : (
        <>
          <polygon fill="url(#btn-top)" fillRule="nonzero" points="100 42 100 44 0 44 0 42" />
          <polygon fill="url(#btn-bottom)" fillRule="nonzero" points="100 0 100 2 0 2 0 0" />
        </>
      )}
    </svg>
    <svg className="absolute top-0 right-0" width="21" height="44" viewBox="0 0 21 44">
      <path
        fill={white ? "white" : "none"}
        stroke={white ? "white" : "url(#btn-right)"}
        strokeWidth="2"
        d="M0,43.00005 L5.028,43.00005 L12.24,43.00005 C16.526,43.00005 20,39.58105 20,35.36365 L20,16.85855 C20,14.59295 18.978,12.44425 17.209,10.99335 L7.187,2.77111 C5.792,1.62675 4.034,1 2.217,1 L0,1"
      />
    </svg>
  </>
);

export default ButtonSvg;
```

### Summary

1. **ButtonGradient** defines gradient styles using `<defs>` in an SVG element and assigns unique IDs to them.
2. **ButtonGradient** is rendered in the `App` component, making the gradients available globally in the DOM.
3. **ButtonSvg** references these gradient IDs (e.g., `url(#btn-left)`) to apply gradient fills and strokes to its SVG paths and polygons.
4. **Button** component includes **ButtonSvg** within its rendering logic, ensuring that the buttons rendered use these gradient-enhanced SVGs.

This modular approach allows you to define SVG gradients once and reuse them across multiple components, ensuring consistency and reducing duplication. If you have any more questions or need further clarification, feel free to ask!
</details>

## Topic3

Description for Topic3.

## Topic4

Description for Topic4.

## Topic5

Description for Topic5.
