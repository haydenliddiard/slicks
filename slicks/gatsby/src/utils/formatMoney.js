// The Intl object is the namespace for the ECMAScript Internationalization API, which provides language sensitive string comparison, number formatting, and date and time formatting. The Intl object provides access to several constructors as well as functionality common to the internationalization constructors and other language sensitive functions.

const formatter = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

export default function formatMoney(cents) {
    return formatter.format(cents / 100);
}