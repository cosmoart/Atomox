export const atomsCode = {
	'buttons': {
		html: `<button class="btn">
			Click me
		</button>`,
		htmlTailwind: `<button class="px-10 bg-purple-500 hover:scale-105 active:scale-95 transition-transform text-white font-medium py-3 rounded-lg">
			Click me
		</button>`,
		css: `.btn {
			background-color: oklch(62.7% 0.265 303.9);
			color: white;
			font-weight: 600;
			padding: 12px 40px;
			font-size: 16px;
			cursor: pointer;
			border-radius: 7px;
			transition: scale 0.2s ease-in-out;
			border: none;
		}

		.btn:hover {
			scale: 1.1;
		}

		.btn:active {
			scale: 0.9;
		}`,
	},

	'inputs': {
		html: '<input type="text" class="input" placeholder="Type here..." />',
		htmlTailwind: '<input type="text" class="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Type here..." />',
		css: `.input {
	padding: 10px 15px;
	border: 2px solid #ccc;
	border-radius: 6px;
	font-size: 16px;
	outline: none;
	transition: border-color 0.3s ease;
}

.input:focus {
	border-color: oklch(62.7% 0.265 303.9);
}`,
	},

	'backgrounds': {
		html: '<div class="background-grid"></div>',
		htmlTailwind: '<div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>',
		css: `.background-grid {
  position: absolute;
  inset: 0;
  z-index: -10;
  height: 100%;
  width: 100%;
  background-color: white;
  background-image: radial-gradient(#e5e7eb 1px, transparent 1px);
  background-size: 16px 16px;
}
`,
	},

	'loaders': {
		html: '<div class="loader"></div>',
		htmlTailwind: '<div class="w-6 h-6 border-4 border-t-transparent border-purple-500 rounded-full animate-spin"></div>',
		css: `.loader {
	width: 24px;
	height: 24px;
	border: 4px solid oklch(62.7% 0.265 303.9);
	border-top-color: transparent;
	border-radius: 50%;
	animation: spin 1s linear infinite;
}

@keyframes spin {
	to {
		transform: rotate(360deg);
	}
}`,
	},

	'checkboxes': {
		html: '<label><input type="checkbox" class="checkbox" /> Accept terms</label>',
		htmlTailwind: `<label class="inline-flex items-center space-x-2">
	<input type="checkbox" class="w-4 h-4 rounded text-purple-500" />
	<span>Accept terms</span>
</label>`,
		css: `.checkbox {
	width: 16px;
	height: 16px;
	accent-color: oklch(62.7% 0.265 303.9);
}`,
	},

	'radioButtons': {
		html: '<label><input type="radio" name="option" class="radio" /> Option 1</label>',
		htmlTailwind: `<label class="inline-flex items-center space-x-2">
	<input type="radio" name="option" class="w-4 h-4 text-purple-500" />
	<span>Option 1</span>
</label>`,
		css: `.radio {
	width: 16px;
	height: 16px;
	accent-color: oklch(62.7% 0.265 303.9);
}`,
	},

	'switches': {
		html: `<label class="switch">
	<input type="checkbox" />
	<span class="slider"></span>
</label>`,
		htmlTailwind: `<label class="relative inline-block w-12 h-6">
	<input type="checkbox" class="opacity-0 w-0 h-0 peer" />
	<span class="absolute inset-0 bg-gray-300 rounded-full transition peer-checked:bg-purple-500"></span>
	<span class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-6"></span>
</label>`,
		css: `.switch {
	position: relative;
	display: inline-block;
	width: 40px;
	height: 20px;
}

.switch input {
	opacity: 0;
	width: 0;
	height: 0;
}

.slider {
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: #ccc;
	border-radius: 20px;
	transition: 0.4s;
}

.slider:before {
	position: absolute;
	content: "";
	height: 16px;
	width: 16px;
	left: 2px;
	bottom: 2px;
	background-color: white;
	border-radius: 50%;
	transition: 0.4s;
}

input:checked + .slider {
	background-color: oklch(62.7% 0.265 303.9);
}

input:checked + .slider:before {
	transform: translateX(20px);
}`,
	},

	'tooltips': {
		html: `<div class="tooltip">Hover me
	<span class="tooltiptext">Tooltip text</span>
</div>`,
		htmlTailwind: `<div class="relative group">
	<span class="underline cursor-help">Hover me</span>
	<span class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-sm bg-black text-white rounded opacity-0 group-hover:opacity-100 transition">Tooltip text</span>
</div>`,
		css: `.tooltip {
	position: relative;
	display: inline-block;
	cursor: pointer;
}

.tooltiptext {
	visibility: hidden;
	width: 120px;
	background-color: black;
	color: #fff;
	text-align: center;
	border-radius: 6px;
	padding: 5px;
	position: absolute;
	z-index: 1;
	bottom: 125%;
	left: 50%;
	margin-left: -60px;
	opacity: 0;
	transition: opacity 0.3s;
}

.tooltip:hover .tooltiptext {
	visibility: visible;
	opacity: 1;
}`,
	},

	'progressBars': {
		html: `<div class="progress-container">
	<div class="progress-bar" style="width: 70%;"></div>
</div>`,
		htmlTailwind: `<div class="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
	<div class="bg-purple-500 h-full" style="width: 70%;"></div>
</div>`,
		css: `.progress-container {
	width: 100%;
	background-color: #eee;
	border-radius: 10px;
	overflow: hidden;
	height: 16px;
}

.progress-bar {
	height: 100%;
	background-color: oklch(62.7% 0.265 303.9);
	width: 0;
	transition: width 0.5s ease;
}`,
	},

	'selects': {
		html: `<form>
  <p>
    <label for="pet-select">Select pet:</label>
    <select id="pet-select">
      <button>
        <selectedcontent></selectedcontent>
      </button>

      <option value="">Please select a pet</option>
      <option value="cat">
        <span class="icon" aria-hidden="true">🐱</span
        ><span class="option-label">Cat</span>
      </option>
      <option value="dog">
        <span class="icon" aria-hidden="true">🐶</span
        ><span class="option-label">Dog</span>
      </option>
      <option value="hamster">
        <span class="icon" aria-hidden="true">🐹</span
        ><span class="option-label">Hamster</span>
      </option>
      <option value="chicken">
        <span class="icon" aria-hidden="true">🐔</span
        ><span class="option-label">Chicken</span>
      </option>
      <option value="fish">
        <span class="icon" aria-hidden="true">🐟</span
        ><span class="option-label">Fish</span>
      </option>
      <option value="snake">
        <span class="icon" aria-hidden="true">🐍</span
        ><span class="option-label">Snake</span>
      </option>
    </select>
  </p>
</form>
`,
		htmlTailwind: `<select class="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
	<option>Select option</option>
	<option>Option 1</option>
	<option>Option 2</option>
</select>`,
		css: `select,
::picker(select) {
  appearance: base-select;
}
* {
  box-sizing: border-box;
}

html {
  font-family: Arial, Helvetica, sans-serif;
}

body {
  width: 100%;
  padding: 0 10px;
  max-width: 480px;
  margin: 0 auto;
}

h2 {
  font-size: 1.2rem;
}

p {
  display: flex;
  gap: 10px;
}

label {
  width: fit-content;
  align-self: center;
}

select {
  flex: 1;
}
select {
  border: 2px solid #ddd;
  background: #eee;
  padding: 10px;
  transition: 0.4s;
}

select:hover,
select:focus {
  background: #ddd;
}
select::picker-icon {
  color: #999;
  transition: 0.4s rotate;
}
select:open::picker-icon {
  rotate: 180deg;
}
::picker(select) {
  border: none;
}
option {
  display: flex;
  justify-content: flex-start;
  gap: 20px;

  border: 2px solid #ddd;
  background: #eee;
  padding: 10px;
  transition: 0.4s;
}
option:first-of-type {
  border-radius: 8px 8px 0 0;
}

option:last-of-type {
  border-radius: 0 0 8px 8px;
}

option:not(option:last-of-type) {
  border-bottom: none;
}
option:nth-of-type(odd) {
  background: #fff;
}

option:hover,
option:focus {
  background: plum;
}
option .icon {
  font-size: 1.6rem;
  text-box: trim-both cap alphabetic;
}
selectedcontent .icon {
  display: none;
}
option:checked {
  font-weight: bold;
}
option::checkmark {
  order: 1;
  margin-left: auto;
  content: "☑️";
}
::picker(select) {
  opacity: 0;
  transition: all 0.4s allow-discrete;
}
::picker(select):popover-open {
  opacity: 1;
}
@starting-style {
  ::picker(select):popover-open {
    opacity: 0;
  }
}
::picker(select) {
  top: calc(anchor(bottom) + 1px);
  left: anchor(10%);
}
`,
	},
}

export const moleculesCode = {
	'headers': {
		html: '',
		htmlTailwind: '',
		css: '',
	},

	'heroSections': {
		html: '',
		htmlTailwind: '',
		css: '',
	},

	'footers': {
		html: '',
		htmlTailwind: '',
		css: '',
	},

	'cards': {
		html: '',
		htmlTailwind: '',
		css: '',
	},

	'modals': {
		html: '',
		htmlTailwind: '',
		css: '',
	},

	'forms': {
		html: '',
		htmlTailwind: '',
		css: '',
		js: '',
	},

	'errorPages': {
		html: '',
		htmlTailwind: '',
		css: '',
	},

	'pricingTables': {
		html: '',
		htmlTailwind: '',
		css: '',
	},

	'featureSections': {
		html: '',
		htmlTailwind: '',
		css: '',
	},

	'testimonials': {
		html: '',
		htmlTailwind: '',
		css: '',
	},

	'faqs': {
		html: '',
		htmlTailwind: '',
		css: '',
	},

	'ctas': {
		html: '',
		htmlTailwind: '',
		css: '',
	},

	'stats': {
		html: '',
		htmlTailwind: '',
		css: '',
		js: '',
	},

	contentSections: {
		html: '',
		htmlTailwind: '',
		css: '',
		js: '',
	},

	'eCommerce': {
		html: '',
		htmlTailwind: '',
		css: '',
		js: '',
	},

	'cookies': {
		html: '',
		htmlTailwind: '',
		css: '',
	}

}