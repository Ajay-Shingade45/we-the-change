export async function loadRazorpayScript() {
  if (typeof window === 'undefined') return false;
  if (window.Razorpay) return true;
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

/**
 * @param {object} options
 * @param {number} options.amountInRupees
 * @param {string} [options.name]
 * @param {string} [options.description]
 * @param {string} [options.email]
 * @param {string} [options.contact]
 * @param {string} [options.hostedLinkFallback]
 * @param {Object<string, string>} [options.notes]
 * @param {(response: any) => void} [options.onSuccess]
 * @param {() => void} [options.onDismiss]
 */
export async function openDonationCheckout(options) {
  const loaded = await loadRazorpayScript();
  const key = import.meta.env?.VITE_RAZORPAY_KEY;

  if (!loaded || !key) {
    if (options.hostedLinkFallback && typeof window !== 'undefined') {
      window.open(options.hostedLinkFallback, '_blank');
      return;
    }
    throw new Error('Razorpay unavailable or key missing. Set VITE_RAZORPAY_KEY.');
  }

  const amountPaise = Math.max(1, Math.round(options.amountInRupees * 100));

  const rzp = new window.Razorpay({
    key,
    amount: amountPaise,
    currency: 'INR',
    name: options.name || 'We The Change',
    description: options.description || 'Donation',
    prefill: {
      email: options.email,
      contact: options.contact,
    },
    notes: options.notes,
    handler: (response) => {
      options.onSuccess?.(response);
    },
    modal: {
      ondismiss: () => options.onDismiss?.(),
    },
    theme: { color: '#B3202E' },
  });

  rzp.open();
}




