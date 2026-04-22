// Initialize Lucide Icons when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});

/**
 * Switch between pages
 * @param {string} pageId - The ID of the page to switch to
 */
function switchPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    const activePage = document.getElementById(pageId);
    if (activePage) activePage.classList.add('active');

    updateTabBar(pageId);
}

function updateTabBar(pageId) {
    const tabItems = document.querySelectorAll('.tab-item');
    tabItems.forEach(item => {
        item.classList.remove('active');
        const onclickAttr = item.getAttribute('onclick');
        if (onclickAttr && onclickAttr.includes(`'${pageId}'`)) {
            item.classList.add('active');
        }
    });
}

/**
 * Secondary Page Management
 */
function openSecondary(title, contentHtml) {
    const overlay = document.getElementById('overlay');
    const titleEl = document.getElementById('secondary-title');
    const contentEl = document.getElementById('secondary-content');

    titleEl.textContent = title;
    contentEl.innerHTML = contentHtml;
    overlay.classList.add('active');
    
    // Re-initialize icons for new content
    lucide.createIcons();
}

function closeSecondary() {
    document.getElementById('overlay').classList.remove('active');
}

/**
 * Planting Decision Details & Reports
 */
function openStepDetail(step) {
    let title = "";
    let content = "";
    
    switch(step) {
        case 1:
            title = "整地施肥详情";
            content = `
                <div class="step-detail-content">
                    <h4 style="color: var(--accent); margin-bottom: 12px;">土壤改良方案</h4>
                    <p style="font-size: 14px; line-height: 1.6; margin-bottom: 20px;">
                        根据当前土壤传感器数据，地块 A-05 的 pH 值为 6.8，有机质含量略低。
                    </p>
                    <div style="background: rgba(255,255,255,0.05); padding: 16px; border-radius: 12px; margin-bottom: 16px;">
                        <p style="font-size: 14px;"><b>推荐用量：</b></p>
                        <ul style="font-size: 13px; color: var(--text-secondary); margin-top: 8px;">
                            <li>复合肥：50kg/亩</li>
                            <li>有机肥：200kg/亩</li>
                            <li>微量元素肥：2kg/亩</li>
                        </ul>
                    </div>
                    <h4 style="color: var(--accent); margin-bottom: 12px;">耕作要求</h4>
                    <p style="font-size: 14px; color: var(--text-secondary);">
                        建议采用大型拖拉机进行深翻，深度保持在 25-30cm 之间，确保土层疏松。
                    </p>
                </div>
            `;
            break;
        case 2:
            title = "播种管理详情";
            content = `
                <div class="step-detail-content">
                    <h4 style="color: var(--accent); margin-bottom: 12px;">精准播种参数</h4>
                    <div style="display: flex; gap: 10px; margin-bottom: 20px;">
                        <div style="flex: 1; background: rgba(82,183,136,0.1); padding: 12px; border-radius: 10px; text-align: center;">
                            <span style="font-size: 12px;">播种深度</span>
                            <div style="font-size: 18px; font-weight: bold;">3-5cm</div>
                        </div>
                        <div style="flex: 1; background: rgba(82,183,136,0.1); padding: 12px; border-radius: 10px; text-align: center;">
                            <span style="font-size: 12px;">株间距</span>
                            <div style="font-size: 18px; font-weight: bold;">20cm</div>
                        </div>
                    </div>
                    <h4 style="color: var(--accent); margin-bottom: 12px;">环境窗口期</h4>
                    <p style="font-size: 14px; line-height: 1.6;">
                        预测下周气温稳定上升，最佳播种时间为 <b>4月25日 - 4月28日</b>。请避开雷雨天气。
                    </p>
                </div>
            `;
            break;
        case 3:
            title = "后期养护详情";
            content = `
                <div class="step-detail-content">
                    <h4 style="color: var(--accent); margin-bottom: 12px;">田间管理计划</h4>
                    <div style="border-left: 2px solid var(--accent); padding-left: 15px; margin-bottom: 20px;">
                        <p style="font-size: 14px;"><b>巡检频率：</b> 每 3 天一次</p>
                        <p style="font-size: 14px;"><b>重点观察：</b> 苗期蚜虫、水分吸收情况</p>
                    </div>
                    <h4 style="color: var(--accent); margin-bottom: 12px;">灌溉建议</h4>
                    <p style="font-size: 14px; color: var(--text-secondary);">
                        结合未来天气预报，如连续 5 天无雨，请启动智能喷灌系统，补充水量 15m³/亩。
                    </p>
                </div>
            `;
            break;
    }
    openSecondary(title, content);
}

function openPlantingDecision() {
    const html = `
        <div class="planting-decision-report">
            <div style="text-align: center; margin-bottom: 24px;">
                <i data-lucide="award" style="width: 48px; height: 48px; color: var(--accent); margin: 0 auto 12px;"></i>
                <h3 style="color: var(--accent);">全周期种植决策书</h3>
                <p style="font-size: 12px; color: var(--text-secondary);">地块编号：A-05 | 作物：玉米</p>
            </div>
            
            <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 20px; margin-bottom: 20px;">
                <h4 style="margin-bottom: 15px;">📊 预期产量分析</h4>
                <div style="height: 100px;">
                    <svg viewBox="0 0 335 100">
                        <rect x="10" y="20" width="315" height="10" rx="5" fill="rgba(255,255,255,0.1)"></rect>
                        <rect x="10" y="20" width="260" height="10" rx="5" fill="var(--accent)"></rect>
                        <text x="10" y="50" fill="white" font-size="12">当前方案预估产量：850kg/亩</text>
                        <text x="10" y="70" fill="var(--text-secondary)" font-size="10">较本地区平均水平提升 15%</text>
                    </svg>
                </div>
            </div>

            <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 20px; margin-bottom: 20px;">
                <h4 style="margin-bottom: 15px;">💧 资源投入概算</h4>
                <div style="font-size: 14px; display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                    <span>种子：4kg</span>
                    <span>肥料：250kg</span>
                    <span>用水：45m³</span>
                    <span>人工：1.5工日</span>
                </div>
            </div>

            <button class="action-btn" style="width: 100%;" onclick="closeSecondary()">同步至农场管理系统</button>
        </div>
    `;
    openSecondary('种植决策报告', html);
}

/**
 * Pest Detection Details & Diagnostic Report
 */
function openPestDetail() {
    const html = `
        <div class="pest-detail">
            <div class="severity-badge" style="display: inline-block; padding: 4px 12px; background: rgba(255, 215, 0, 0.2); color: #FFD700; border-radius: 8px; font-size: 14px; margin-bottom: 16px;">
                中度危害
            </div>
            <h3 style="margin-bottom: 12px;">玉米大斑病 (Exserohilum turcicum)</h3>
            <p style="font-size: 14px; line-height: 1.6; color: var(--text-secondary); margin-bottom: 20px;">
                主要危害叶片，严重时也危害叶鞘和苞叶。从植株下部叶片开始发病，向上扩展。病斑长梭形，灰褐色或黄褐色。
            </p>
            <h4 style="margin-bottom: 12px;">发病条件</h4>
            <ul style="font-size: 14px; color: var(--text-secondary); padding-left: 20px; line-height: 1.8;">
                <li>气温 20℃~25℃</li>
                <li>相对湿度 90% 以上</li>
                <li>连作地块发病较重</li>
            </ul>
        </div>
    `;
    openSecondary('病害详情', html);
}

function openDiagnosticReport() {
    const html = `
        <div class="diagnostic-report">
            <div class="report-header" style="text-align: center; margin-bottom: 24px;">
                <i data-lucide="file-text" style="width: 48px; height: 48px; color: var(--accent); margin: 0 auto 12px;"></i>
                <h3 style="color: var(--accent);">AI 智能诊断报告</h3>
                <p style="font-size: 12px; color: var(--text-secondary);">生成时间：2024-04-21 14:30</p>
            </div>
            
            <div class="report-section" style="background: rgba(255,255,255,0.05); padding: 16px; border-radius: 16px; margin-bottom: 16px;">
                <h4 style="margin-bottom: 8px; border-left: 3px solid var(--accent); padding-left: 8px;">诊断结论</h4>
                <p style="font-size: 14px;">确认为玉米大斑病感染，置信度 98.5%。</p>
            </div>

            <div class="report-section" style="background: rgba(255,255,255,0.05); padding: 16px; border-radius: 16px; margin-bottom: 16px;">
                <h4 style="margin-bottom: 8px; border-left: 3px solid var(--accent); padding-left: 8px;">治理建议</h4>
                <div style="font-size: 14px; line-height: 1.8;">
                    <p>1. 立即隔离发病区域，防止孢子随风传播。</p>
                    <p>2. 建议药剂：50%多菌灵可湿性粉剂 500倍液。</p>
                    <p>3. 增强通风透光，降低田间湿度。</p>
                </div>
            </div>

            <div class="report-section" style="background: rgba(255,255,255,0.05); padding: 16px; border-radius: 16px;">
                <h4 style="margin-bottom: 8px; border-left: 3px solid var(--accent); padding-left: 8px;">预防措施</h4>
                <p style="font-size: 14px; color: var(--text-secondary);">下季建议实行轮作，选用抗病品种，并加强秋季深翻，清除病残体。</p>
            </div>

            <div class="action-btn" style="width: 100%; margin-top: 30px;" onclick="closeSecondary()">保存并发送至农技员</div>
        </div>
    `;
    openSecondary('诊断报告', html);
}

/**
 * Machinery Details & Efficiency Chart
 */
function openMachineryDetail(name) {
    const data = [40, 65, 50, 85, 70, 95, 80]; // Mock efficiency data
    const points = data.map((v, i) => `${(i * 50) + 10},${150 - v}`).join(' ');
    const dots = data.map((v, i) => `<circle cx="${(i * 50) + 10}" cy="${150 - v}" r="4"></circle>`).join('');

    const html = `
        <div class="machinery-detail">
            <div class="info-card" style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 20px;">
                <h3 style="margin-bottom: 10px;">${name}</h3>
                <p style="color: var(--text-secondary); font-size: 14px;">状态：运行良好</p>
                <p style="color: var(--text-secondary); font-size: 14px;">工作时长：128小时</p>
            </div>
            <h4 style="margin: 24px 0 12px;">工作效率趋势 (亩/小时)</h4>
            <div class="chart-container">
                <svg viewBox="0 0 335 180" class="chart-svg">
                    <polyline points="${points}" class="chart-line"></polyline>
                    <g class="chart-dots">${dots}</g>
                </svg>
            </div>
            <p style="margin-top: 16px; font-size: 12px; color: var(--accent);">* 近7日除草作业效率统计</p>
        </div>
    `;
    openSecondary(`${name} 详情`, html);
}

/**
 * Machinery Booking Page
 */
function openBookingPage() {
    const html = `
        <div class="booking-form">
            <div class="form-group">
                <label>选择农机类型</label>
                <select>
                    <option>除草机</option>
                    <option>收割机</option>
                    <option>播种机</option>
                </select>
            </div>
            <div class="form-group">
                <label>预约日期</label>
                <input type="date">
            </div>
            <div class="form-group">
                <label>作业面积 (亩)</label>
                <input type="number" placeholder="请输入数值">
            </div>
            <div class="form-group">
                <label>联系电话</label>
                <input type="tel" placeholder="请输入您的电话">
            </div>
            <div class="action-btn" style="width: 100%; margin: 20px 0;" onclick="closeSecondary()">提交预约请求</div>
        </div>
    `;
    openSecondary('立即预约农机', html);
}

/**
 * Crop Data Detailed Charts
 */
function openCropChart(type, data) {
    const points = data.map((v, i) => `${(i * 50) + 10},${150 - (v * 2)}`).join(' ');
    const dots = data.map((v, i) => `<circle cx="${(i * 50) + 10}" cy="${150 - (v * 2)}" r="4"></circle>`).join('');

    const html = `
        <div class="crop-detail">
            <div class="stat-summary" style="display: flex; gap: 12px; margin-bottom: 24px;">
                <div style="flex: 1; background: rgba(255,255,255,0.05); padding: 16px; border-radius: 16px;">
                    <span style="font-size: 12px; color: var(--text-secondary);">当前值</span>
                    <div style="font-size: 20px; font-weight: bold; color: var(--accent);">${data[data.length-1]}</div>
                </div>
                <div style="flex: 1; background: rgba(255,255,255,0.05); padding: 16px; border-radius: 16px;">
                    <span style="font-size: 12px; color: var(--text-secondary);">今日均值</span>
                    <div style="font-size: 20px; font-weight: bold;">${(data.reduce((a,b)=>a+b)/data.length).toFixed(1)}</div>
                </div>
            </div>
            <h4>24小时数据趋势</h4>
            <div class="chart-container">
                <svg viewBox="0 0 335 180" class="chart-svg">
                    <polyline points="${points}" class="chart-line"></polyline>
                    <g class="chart-dots">${dots}</g>
                </svg>
            </div>
            <div style="margin-top: 24px; color: var(--text-secondary); font-size: 14px; line-height: 1.6;">
                <p>💡 系统分析：当前${type}处于作物生长理想区间，无需额外干预。</p>
            </div>
        </div>
    `;
    openSecondary(`${type} 详细数据`, html);
}

document.addEventListener('DOMContentLoaded', () => {
    // Initial setup if needed
});
