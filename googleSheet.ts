
// আপনার গুগল অ্যাপস স্ক্রিপ্ট ইউআরএলটি এখানে বসান
// Replace with your actual Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = 'YOUR_WEB_APP_URL_HERE';

export const submitToSheet = async (data: any) => {
  try {
    // We use 'no-cors' mode because Google Apps Script redirects can cause CORS issues in simple fetch
    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return { success: true };
  } catch (error) {
    console.error('Error submitting to Google Sheet:', error);
    throw error;
  }
};
