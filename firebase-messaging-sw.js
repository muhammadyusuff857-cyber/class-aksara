importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCews7iQRZVvGkQhCEKf1ZE4Qidv8mDzyk",
  authDomain: "class-akuntansi.firebaseapp.com",
  projectId: "class-akuntansi",
  storageBucket: "class-akuntansi.firebasestorage.app",
  messagingSenderId: "831610923576",
  appId: "1:831610923576:web:59619baf2d9fc619e4d4cd"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  const { title, body } = payload.notification;
  self.registration.showNotification(title, {
    body: body,
    icon: '/logo-aksara.png',
    badge: '/logo-aksara.png',
    vibrate: [200, 100, 200],
    tag: 'class-notif',
    renotify: true,
    data: payload.data
  });
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('https://class-aksara-y3v2.vercel.app')
  );
});
