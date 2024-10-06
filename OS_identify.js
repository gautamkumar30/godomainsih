import Head from 'next/head';

function HomePage() {
  const userAgent = navigator.userAgent;
  const browserName = getBrowserName(userAgent);
  const osName = getOSName(userAgent);
  const deviceType = getDeviceType(userAgent);

  async function sendDataToServer() {
    const response = await fetch('/api/user-info', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ browserName, osName, deviceType }),
    });

    if (response.ok) {
      console.log('User  info sent to server successfully!');
    } else {
      console.error('Error sending user info to server:', response.status);
    }
  }

  return (
    <div>
      <Head>
        <title>User Info</title>
      </Head>
      <h1>User Info</h1>
      <button onClick={sendDataToServer}>Send user info to server</button>
    </div>
  );
}

function getBrowserName(userAgent) {
  const browsers = [
    { name: 'Chrome', regex: /Chrome\/(\d+)/ },
    { name: 'Firefox', regex: /Firefox\/(\d+)/ },
    { name: 'Safari', regex: /Safari\/(\d+)/ },
    { name: 'Edge', regex: /Edge\/(\d+)/ },
    { name: 'IE', regex: /MSIE (\d+)/ },
  ];

  for (const browser of browsers) {
    const match = userAgent.match(browser.regex);
    if (match) return browser.name;
  }

  return 'Unknown';
}

function getOSName(userAgent) {
  const osList = [
    { name: 'Windows', regex: /Windows NT (\d+)/ },
    { name: 'Mac OS', regex: /Macintosh; Intel Mac OS X (\d+)/ },
    { name: 'Linux', regex: /Linux/i },
    { name: 'Android', regex: /Android (\d+)/ },
    { name: 'iOS', regex: /iPhone|iPad|iPod/i },
  ];

  for (const os of osList) {
    const match = userAgent.match(os.regex);
    if (match) return os.name;
  }

  return 'Unknown';
}

function getDeviceType(userAgent) {
  if (userAgent.match(/Mobile/i)) return 'Mobile';
  if (userAgent.match(/Tablet/i)) return 'Tablet';
  return 'Desktop';
}

export default HomePage;
