// This function generates the sidebar and highlights the active page.
const generateSidebar = (activePage) => {
    // Define all navigation links in an array of objects.
    const links = [
        { id: 'dashboard', href: 'app-dashboard.html', text: '主控儀表板', icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>` },
        { id: 'advisor', href: 'app-advisor.html', text: 'AI 進貨顧問', icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd" /></svg>` },
        { id: 'inventory', href: 'app-inventory.html', text: '智慧庫存管理', icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M5 8a3 3 0 000 6h10a3 3 0 000-6H5z" /></svg>` },
        { id: 'market', href: 'app-market.html', text: '市場趨勢洞察', icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 11.586l3.293-3.293a1 1 0 011.414 0l-3 3a1 1 0 010 1.414z" clip-rule="evenodd" /></svg>` },
        { id: 'reports', href: 'app-reports.html', text: '數據報告', icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" /></svg>` }
    ];

    // Generate the HTML for the main navigation links
    const navLinksHTML = links.map(link => `
        <a href="${link.href}" class="flex items-center gap-3 px-4 py-3 rounded-lg sidebar-link ${activePage === link.id ? 'active' : ''}">
            ${link.icon}
            <span>${link.text}</span>
        </a>
    `).join('');

    // Assemble the full sidebar HTML
    const sidebarHTML = `
        <aside class="w-64 bg-slate-900 text-slate-300 flex flex-col p-4 flex-shrink-0">
            <div class="text-2xl font-bold gradient-text mb-10 px-2">避錯寶</div>
            <nav class="flex-grow space-y-2">${navLinksHTML}</nav>
            <div class="mt-auto">
                <a href="app-settings.html" class="flex items-center gap-3 px-4 py-3 rounded-lg sidebar-link ${activePage === 'settings' ? 'active' : ''}">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.96.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01-.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" /></svg>
                    <span>帳戶設定</span>
                </a>
                <a href="auth.html" class="flex items-center gap-3 px-4 py-3 rounded-lg sidebar-link">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd" /></svg>
                    <span>登出</span>
                </a>
            </div>
        </aside>
    `;

    // Inject the generated HTML into the placeholder container.
    document.getElementById('sidebar-container').innerHTML = sidebarHTML;
};
