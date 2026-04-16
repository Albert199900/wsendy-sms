<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Wsendy SMS - Modern Offline SMS Application">
    <meta name="theme-color" content="#2196F3">
    <title>Wsendy SMS - Offline SMS App</title>
    <base href="./">
    <link rel="manifest" href="./manifest.json">
    <link rel="icon" type="image/png" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 192 192'><rect fill='%232196F3' width='192' height='192'/><text x='50%' y='50%' font-size='80' fill='white' text-anchor='middle' dy='.3em' font-weight='bold'>W</text></svg>">
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <!-- Header -->
    <header class="header">
        <div class="header-content">
            <div class="logo">
                <span class="logo-text">Wsendy SMS</span>
            </div>
            <div class="header-actions">
                <button id="notificationBtn" class="icon-btn" title="Notifications">
                    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                        <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
                    </svg>
                    <span class="notification-badge" id="notificationBadge">0</span>
                </button>
                <button id="settingsBtn" class="icon-btn" title="Settings">
                    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>
                        <path d="M12 1v6m0 6v6"/>
                        <path d="M4.22 4.22l4.24 4.24m0 5.08l-4.24 4.24M19.78 4.22l-4.24 4.24m0 5.08l4.24 4.24"/>
                    </svg>
                </button>
            </div>
        </div>
    </header>

    <!-- Main Content -->
    <main class="main-content">
        <!-- Tabs Navigation -->
        <nav class="tabs">
            <button class="tab-btn active" data-tab="compose">
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                </svg>
                Compose
            </button>
            <button class="tab-btn" data-tab="inbox">
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="22 12 18 12 15 21 9 21 6 12 2 12"/><path d="M6 12V7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v5"/>
                </svg>
                Inbox
            </button>
            <button class="tab-btn" data-tab="sent">
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
                Sent
            </button>
        </nav>

        <!-- Compose Tab -->
        <section id="compose" class="tab-content active">
            <div class="container">
                <form id="smsForm" class="sms-form">
                    <!-- Recipient -->
                    <div class="form-group">
                        <label for="recipient">Recipient Number</label>
                        <div class="input-wrapper">
                            <svg class="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                            </svg>
                            <input type="tel" id="recipient" placeholder="Enter phone number" required>
                        </div>
                    </div>

                    <!-- Network Selection -->
                    <div class="form-group">
                        <label for="network">Network Provider</label>
                        <div class="network-selection">
                            <label class="radio-option">
                                <input type="radio" name="network" value="airtel" checked>
                                <span class="network-badge">Airtel</span>
                            </label>
                            <label class="radio-option">
                                <input type="radio" name="network" value="vodacom">
                                <span class="network-badge">Vodacom</span>
                            </label>
                            <label class="radio-option">
                                <input type="radio" name="network" value="tigo">
                                <span class="network-badge">Tigo</span>
                            </label>
                            <label class="radio-option">
                                <input type="radio" name="network" value="halotel">
                                <span class="network-badge">Halotel</span>
                            </label>
                        </div>
                    </div>

                    <!-- Message -->
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea id="message" placeholder="Type your message..." rows="5" required></textarea>
                        <div class="char-counter">
                            <span id="charCount">0</span> / 160 characters
                        </div>
                    </div>

                    <!-- Message Type -->
                    <div class="form-group">
                        <label for="msgType">Message Type</label>
                        <select id="msgType" class="form-input">
                            <option value="text">Text Message</option>
                            <option value="flash">Flash SMS</option>
                            <option value="unicode">Unicode Message</option>
                        </select>
                    </div>

                    <!-- Enable Notification -->
                    <div class="form-group checkbox-group">
                        <label class="checkbox-label">
                            <input type="checkbox" id="enableNotif" checked>
                            <span>Enable Delivery Notification</span>
                        </label>
                    </div>

                    <!-- Action Buttons -->
                    <div class="button-group">
                        <button type="submit" class="btn btn-primary">
                            <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 L4.13399899,1.16151496 C3.34915502,0.9 2.40734225,1.00636533 1.77946707,1.4776575 C0.994623095,2.10604706 0.837654326,3.0486314 1.15159189,3.99021575 L3.03521743,10.4312088 C3.03521743,10.5883061 3.19218622,10.7454035 3.50612381,10.7454035 L16.6915026,11.5308905 C16.6915026,11.5308905 17.1624089,11.5308905 17.1624089,12.0021827 C17.1624089,12.4744748 16.6915026,12.4744748 16.6915026,12.4744748 Z"/>
                            </svg>
                            Send SMS
                        </button>
                        <button type="button" class="btn btn-secondary" id="shareWhatsapp">
                            <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.71.227 1.355.195 1.865.118.569-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004c-1.708 0-3.35.674-4.573 1.888-1.223 1.213-1.897 2.848-1.897 4.556 0 1.134.292 2.24.847 3.216l-1.286 4.708 4.819-1.269c.94.557 2.049.848 3.17.848h.004c1.708 0 3.35-.674 4.573-1.888 1.223-1.213 1.897-2.848 1.897-4.556 0-1.708-.674-3.35-1.897-4.573-1.223-1.224-2.865-1.897-4.573-1.897M20.534 3.464C18.962 1.897 16.956 1 14.8 1 8.029 1 2.5 6.529 2.5 13.3c0 2.323.6 4.588 1.741 6.578L2 23l7.448-1.953c1.923 1.05 4.099 1.603 6.352 1.603 6.77 0 12.3-5.529 12.3-12.3 0-3.289-.681-6.494-1.966-9.486"/>
                            </svg>
                            Share WhatsApp
                        </button>
                    </div>
                </form>

                <!-- Quick Actions -->
                <div class="quick-actions">
                    <button class="action-card" id="donateBtn">
                        <svg class="icon-large" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"/><path d="M12 8v8m-2-2h4"/>
                        </svg>
                        <span>Donate</span>
                    </button>
                    <button class="action-card" id="importBtn">
                        <svg class="icon-large" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                        </svg>
                        <span>Import Contacts</span>
                    </button>
                    <button class="action-card" id="scheduleBtn">
                        <svg class="icon-large" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                        </svg>
                        <span>Schedule</span>
                    </button>
                </div>
            </div>
        </section>

        <!-- Inbox Tab -->
        <section id="inbox" class="tab-content">
            <div class="container">
                <div id="inboxList" class="message-list">
                    <div class="empty-state">
                        <svg class="empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="22 12 18 12 15 21 9 21 6 12 2 12"/><path d="M6 12V7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v5"/>
                        </svg>
                        <p>No messages received yet</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Sent Tab -->
        <section id="sent" class="tab-content">
            <div class="container">
                <div id="sentList" class="message-list">
                    <div class="empty-state">
                        <svg class="empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                        </svg>
                        <p>No messages sent yet</p>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <!-- Modals -->
    
    <!-- Settings Modal -->
    <div id="settingsModal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <h2>Settings</h2>
                <button class="close-btn" aria-label="Close">&times;</button>
            </div>
            <div class="modal-body">
                <div class="settings-section">
                    <h3>Notifications</h3>
                    <label class="toggle-label">
                        <input type="checkbox" id="soundNotif" checked>
                        <span>Sound Notifications</span>
                    </label>
                    <label class="toggle-label">
                        <input type="checkbox" id="vibration" checked>
                        <span>Vibration</span>
                    </label>
                </div>

                <div class="settings-section">
                    <h3>Display</h3>
                    <label class="toggle-label">
                        <input type="checkbox" id="darkMode">
                        <span>Dark Mode</span>
                    </label>
                    <div class="form-group">
                        <label for="fontSize">Font Size</label>
                        <select id="fontSize" class="form-input">
                            <option value="small">Small</option>
                            <option value="medium" selected>Medium</option>
                            <option value="large">Large</option>
                        </select>
                    </div>
                </div>

                <div class="settings-section">
                    <h3>Storage</h3>
                    <button class="btn btn-secondary" id="clearCacheBtn">Clear Cache</button>
                    <button class="btn btn-secondary" id="exportDataBtn">Export Data</button>
                </div>

                <div class="settings-section">
                    <h3>About</h3>
                    <p>Wsendy SMS v1.0.0</p>
                    <p>Modern Offline SMS Application</p>
                    <p style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--border-color); color: var(--text-secondary); font-size: 0.9rem;">Developed by <strong>Kabonge General Services</strong></p>
                </div>
            </div>
        </div>
    </div>

    <!-- Notification Modal -->
    <div id="notificationModal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <h2>Notifications</h2>
                <button class="close-btn" aria-label="Close">&times;</button>
            </div>
            <div class="modal-body">
                <div id="notificationsList" class="notifications-list">
                    <div class="empty-state">
                        <p>No notifications</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Donate Modal -->
    <div id="donateModal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <h2>Support Us</h2>
                <button class="close-btn" aria-label="Close">&times;</button>
            </div>
            <div class="modal-body">
                <div class="donate-section">
                    <p>Help us improve Wsendy SMS by making a donation</p>
                    <div class="donate-info">
                        <p class="donate-number">📱 <strong>0627962633</strong></p>
                        <p class="donate-hint">Send any amount via M-Pesa, Airtel Money, or Vodacom Cash</p>
                    </div>
                    <button class="btn btn-primary" id="copyDonateBtn">Copy Donation Number</button>
                    <button class="btn btn-secondary" id="whatsappDonateBtn">Contact via WhatsApp</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Toast Notification -->
    <div id="toast" class="toast"></div>

    <script src="./app.js"></script>
</body>
</html>
