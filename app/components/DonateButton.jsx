'use client';

import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { openDonationCheckout } from '../utils/razorpay';

/**
 * @param {object} props
 * @param {number} [props.amount=500]
 * @param {string} [props.className]
 * @param {string} [props.hostedLinkFallback]
 * @param {*} [props.children]
 * @param {(response: unknown) => void} [props.onSuccess]
 * @param {boolean} [props.disabled]
 */
export default function DonateButton({ amount = 500, className = '', hostedLinkFallback, children, onSuccess, disabled }) {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    try {
      setLoading(true);
      const loadingToast = toast.loading('Opening payment gateway...');
      await openDonationCheckout({ 
        amountInRupees: amount, 
        hostedLinkFallback,
        onSuccess: (response) => {
          toast.dismiss(loadingToast);
          toast.success(`💝 Thank you for your donation of ₹${amount.toLocaleString()}!`, {
            duration: 6000,
          });
          onSuccess?.(response);
        }
      });
      toast.dismiss(loadingToast);
    } catch (e) {
      console.error(e);
      toast.error('Unable to open donation checkout. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={loading || disabled}
      className={`inline-flex items-center justify-center gap-2 font-semibold hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/20 disabled:opacity-60 disabled:cursor-not-allowed ${className}`}
      aria-busy={loading}
    >
      {loading ? (
        <>
          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>Processing...</span>
        </>
      ) : (
        <>
          {children || (
            <>
              <FaHeart className="w-4 h-4" />
              <span>Donate</span>
            </>
          )}
        </>
      )}
    </button>
  );
}




