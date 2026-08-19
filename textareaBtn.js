/**
 * Attaches Copy and Clear SVG icon buttons to a single textarea element.
 * @param {HTMLTextAreaElement} textarea 
 */
function attachActionButtons(textarea) {
  if (textarea.dataset.hasActionButtons) return;
  textarea.dataset.hasActionButtons = 'true';

  // SVG Markup Definitions
  const copySvg = `<svg class="w-3.5 h-3.5 bg-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>`;
  const checkSvg = `<svg class="w-3.5 h-3.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>`;
  const clearSvg = `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>`;

  // Wrapper container
  const wrapper = document.createElement('div');
  wrapper.className = 'relative w-full';

  // Add top padding to textarea so text doesn't overlap icons
  textarea.classList.add('pt-9');

  textarea.parentNode.insertBefore(wrapper, textarea);
  wrapper.appendChild(textarea);

  // Button Group Container
  const btnGroup = document.createElement('div');
  btnGroup.className = 'absolute top-2 right-2 flex gap-1 z-10';

  // Base Tailwind IconButton styles
  const btnBaseClass = 'p-1.5 bg-gray-100 hover:bg-gray-200 active:bg-gray-300 text-gray-600 hover:text-gray-900 border border-gray-300 rounded transition-colors cursor-pointer flex items-center justify-center';

  // Copy Button
  const copyBtn = document.createElement('button');
  copyBtn.type = 'button';
  copyBtn.className = btnBaseClass;
  copyBtn.title = 'Copy text';
  copyBtn.innerHTML = copySvg;

  copyBtn.addEventListener('click', async () => {
    if (!textarea.value) return;
    try {
      await navigator.clipboard.writeText(textarea.value);
      copyBtn.innerHTML = checkSvg;
      copyBtn.title = 'Copied!';
      
      setTimeout(() => {
        copyBtn.innerHTML = copySvg;
        copyBtn.title = 'Copy text';
      }, 1500);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  });

  // Clear Button
  const clearBtn = document.createElement('button');
  clearBtn.type = 'button';
  clearBtn.className = `${btnBaseClass} hover:text-red-600 hover:border-red-300`;
  clearBtn.title = 'Clear text';
  clearBtn.innerHTML = clearSvg;

  clearBtn.addEventListener('click', () => {
    textarea.value = '';
    textarea.focus();
  });

  // Assemble
  btnGroup.appendChild(copyBtn);
  btnGroup.appendChild(clearBtn);
  wrapper.appendChild(btnGroup);
}

/**
 * Observes DOM changes and initializes icon action buttons on textareas.
 */
function initDynamicTextareaButtons(targetNode = document.body) {
  targetNode.querySelectorAll('textarea').forEach(attachActionButtons);

  const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType !== Node.ELEMENT_NODE) return;

          if (node.tagName === 'TEXTAREA') {
            attachActionButtons(node);
          }

          node.querySelectorAll?.('textarea').forEach(attachActionButtons);
        });
      }
    }
  });

  observer.observe(targetNode, {
    childList: true,
    subtree: true,
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => initDynamicTextareaButtons());
} else {
  initDynamicTextareaButtons();
}
