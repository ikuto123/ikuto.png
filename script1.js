document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('chat-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const chatBox = document.getElementById('chat-box');
    const chatInput = document.getElementById('chat-input');
    const message = chatInput.value.trim();

    if (message) {
        const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        const userMessage = document.createElement('div');
        userMessage.className = 'chat-message user';
        userMessage.innerHTML = `<span class="message-text">${message}</span> <span class="message-time">${time}</span>`;
        chatBox.appendChild(userMessage);

        chatInput.value = '';

    }
}
