const $=(q,r=document)=>r.querySelector(q);const $$=(q,r=document)=>[...r.querySelectorAll(q)];
const skills=[
{name:'Cloud/M365/O365',score:95,items:['Microsoft 365','Office 365','Exchange Online','Exchange Server','Teams','Skype for Business','OneDrive','SharePoint','Power BI reports','DMARC','DKIM','SPF','License procurement','License optimization','Retention policy governance','Azure API / Graph permissions']},
{name:'AI Technologies',score:93,items:['Azure OpenAI','GPT-4.1','GPT-5.2','Text embedding models','LangChain','Semantic search','Contextual Q&A','Document summarization','Prompt engineering','Token optimization','ChatGPT','Gemini','Microsoft Copilot','Copilot Studio','Intune Copilot','Adaptive Cards','Teams controls']},
{name:'Identity / Entra / IAM',score:92,items:['Entra ID','Azure AD','Azure AD Connect','Entra Connect','ADFS','Conditional Access','MFA','Authentication methods','Enterprise Applications','OpenID','OAuth','SSO','Access Reviews','Identity Protection','Risk users','Workday integration','Entra Provisioning Agent','OKTA migration']},
{name:'Endpoint / Intune / Windows 365',score:90,items:['Microsoft Intune','MDM','Windows Autopilot','Windows 365 Cloud PC','Cloud PC deployment policies','Azure VNET','Compliance policies','Configuration policies','Update rings','Windows 10 to 11 upgrades','macOS updates','Android updates','iOS/iPadOS updates','Co-managed devices','Application Proxy']},
{name:'Security / CyberArk / PAM',score:86,items:['CyberArk PSM','CyberArk CPM','PVWA','EPV accounts','PrivateArk','Safes','RDP/VPN access','PSM recording review','Service log review','Password authentication','AutoIt connectors','Mac/Linux CyberArk testing']},
{name:'Automation / Scripting',score:88,items:['PowerShell','Python','Shell script','AutoIt','MS Graph','MGGraph','MSOL','Exchange Online PowerShell','Teams PowerShell','Azure AD PowerShell','Graph API automation','Backup scripts','Daily newsletter automation','Attribute automation']},
{name:'Operating Systems',score:89,items:['Windows','Windows XP','Windows 7','Windows 8','Windows 10','Windows 11','Windows Server 2003','2008 R2','2012 R2','2016','2019','Ubuntu','Linux','Mac OS X']},
{name:'Languages / Web',score:80,items:['C#','VB.Net','VC++','JavaScript','HTML','XML','CSS','JPHP','Python','Shell script','AutoIt']},
{name:'Storage / Virtualization / Network',score:82,items:['SQL Server 2005/2008','NAS','SAN','VMware ESXi','vSphere','Citrix VDI','VMWare VDI','OpenVPN','Pulse Secure VPN','DNS','File Systems','File Replication System','SPLIT storage','MIRROR','DISTRIBUTE','DISPERSED','AWS EC2']},
{name:'Migration / Tools / Design',score:84,items:['BitTitan','ShareGate','Quest','SCCM 2016','ServiceNow','JIRA','Request Tracker','GitLab','Adobe Photoshop','Visual Studio','QT Creator','MobileIron','TouchDown']}
];
const experiences=[
{role:'Client Infrastructure Architect',company:'TECHNICOLOR India Shared Services LLP, Bengaluru',period:'Dec 2023 – Present',tags:['Azure OpenAI','Copilot','Entra','IAM','Windows 365','M365','Intune','CyberArk'],sections:[
['Azure OpenAI Architect',['Developed and deployed intelligent solutions using Azure OpenAI models including GPT-4.1, GPT-5.2, and text embedding models to enhance enterprise automation and knowledge retrieval.','Built LangChain-based pipelines to orchestrate multi-step reasoning tasks, enabling dynamic document summarization, semantic search, and contextual Q&A across internal data sources.','Created Python scripts to automate Azure OpenAI interactions, including prompt engineering, token optimization, and chaining outputs for downstream processing.','Designed and scheduled PowerShell-based automation to generate and distribute daily newsletters using Azure OpenAI, integrating web search and RSS feeds to curate relevant content for internal stakeholders.','Ensured secure API access and compliance by managing authentication, logging, and usage monitoring for AI-powered workflows.','Collaborated with cross-functional teams to integrate AI capabilities into Microsoft Teams, SharePoint, and internal dashboards, improving decision-making and user engagement.']],
['Copilot',['Utilized Microsoft Copilot to streamline daily tasks and improve productivity in project management and documentation.','Used Copilot data analysis and synthesis features to gather insights and make informed decisions for project outcomes and strategic planning.','Assisted training and onboarding by creating comprehensive training materials and guides with Copilot.','Facilitated collaboration by using Copilot to manage tasks, track progress, and coordinate with members across locations.','Created and deployed custom Copilot agents using Copilot Studio, integrating various data sources and applications.','Leveraged Copilot agent to distribute compliance and privacy policies and terms of use.','Designed user-friendly interfaces using Adaptive Cards and Teams controls for seamless interactions and better engagement.']],
['Entra Architect',['Installed and maintained Entra Connect Services with specific AD attributes and OU synchronization.','Configured Entra / Azure AD Connect with ADFS services.','Organized governance calls for security and compliance, Azure AD Conditional Access and Exchange Online rules.','Managed Enterprise Applications with OpenID, OAuth and SSO.','Implemented Conditional Access policies for user-specific and application-specific scenarios.','Maintained MFA enforcement for all users and exceptional managed service principal accounts.','Created an app launcher for first-day work applications and license management approval.','Managed authentication methods to allow specific 2FA methods for users.','Implemented Access Review policy for M365 groups and guest users based on group members.','Continuously reviewed risk users based on Identity Protection policies and took action on events.']],
['IAM Architect',['Integrated Workday application to on-prem Active Directory.','Implemented Entra Provisioning Agent between Workday and on-prem AD.','Configured provisioning services to add attributes for employee and contractor profiles.','Migrated applications from OKTA to Entra Enterprise Applications.']],
['Windows 365 Architect',['Planned license tiers based on application performance investigation.','Created deployment policies based on region and team-specific requirements.','Administered Azure VNET with inbound and outbound traffic based on regional requirements.','Configured device policies under MEM to meet CISP standards.','Deployed Cloud PCs based on on-prem AD groups by region and team.']],
['M365/O365 Architect',['Managed license procurement and optimization across M365 and O365 models.','Installed, configured and administered Exchange servers.','Resolved issues related to Exchange, Teams, Skype for Business, OneDrive and Intune.','Built PowerShell scripts across MSGraph, MGGraph, Exchange Online, Teams, Azure AD, Entra and Graph API methods.','Managed DMARC, DKIM and SPF records for associated domains.','Performed SharePoint and OneDrive retention policy governance.','Generated Power BI reports for M365 users and groups.','Used BitTitan for mailbox and OneDrive cloud-to-cloud migrations.','Migrated mailboxes and groups from on-premises to Exchange Online.','Used ShareGate for SharePoint site migrations from cloud to cloud and on-prem file shares to SharePoint sites.','Created Azure API registrations for application requests and managed Graph permissions.']],
['Intune MDM Architect',['Managed devices under Intune MDM.','Enrolled Windows devices with Intune Autopilot.','Managed update policies for Windows, Mac, Android and iOS/iPadOS.','Upgraded Windows devices from Windows 10 to Windows 11.','Maintained update rings for pilot and general users.','Created configuration policies for enrollment devices and users.','Maintained devices to infrastructure standards using compliance policies.','Defined policies for co-managed devices.','Installed and maintained Application Proxy services.']],
['Server Admin',['Administered Active Directory using Windows Server 2012/2016/2019.','Maintained Active Directory privileged users, groups and user objects.','Handled ServiceNow tickets based on severity.','Created user guide documentation for application installation and configuration.','Created scripts for changing attributes in Active Directory and Exchange.','Created SCCM 2016 application deployments and packages; examined client and server logs.','Used PowerShell scripts to automate admin tasks.']],
['CyberArk Admin',['Built CyberArk Safes and added connections as per requirements.','Maintained PSM recordings and reviewed sessions and service logs.','Managed EPV accounts for password authentication.','Maintained PrivateArk where all accounts and safes reside.','Managed PVWA for RDP/VPN users.','Created connectors using AutoIt scripts.']]
]},
{role:'Client Infrastructure Administrator',company:'TECHNICOLOR India Shared Services LLP, Bengaluru',period:'Aug 2020 – Nov 2023',tags:['Windows 365','Azure AD','M365','Intune','OKTA','CyberArk'],sections:[
['Windows 365 Architect',['Planned license tiers based on application performance.','Created deployment policies by region and team.','Administered Azure VNET inbound and outbound traffic with region-specific requirements.','Configured MEM device policies to meet CISP standards.','Deployed Cloud PCs based on on-prem AD groups by region and team.']],
['Azure AD Admin',['Configured Azure AD Connect with ADFS services.','Managed Enterprise Applications with OpenID, OAuth and SSO.','Implemented Conditional Access policies for user-specific and application-specific scenarios.','Maintained MFA enforcement for all users with managed service principal exceptions.','Created an app launcher for first-day work apps and license management approval.','Managed authentication methods for specific 2FA methods.','Implemented Access Reviews for M365 groups and guest users.','Reviewed risk-user reports continuously and acted on events.','Maintained onboarding and offboarding services.','Provided training for service desk to manage users and groups.']],
['M365/O365 Administrator',['Managed Office 365 user account creation, deletion and modification.','Performed domain change requests in Office 365.','Optimized licenses including P1, E1, E3, Phone System and Intune.','Installed, configured and administered Exchange servers.','Resolved Exchange, Teams, Skype for Business, OneDrive and Intune issues.','Built PowerShell scripts using MSOL, Exchange Online, Teams, Azure AD and Graph API.','Performed SharePoint and OneDrive retention policy governance.','Managed DMARC, DKIM and SPF records.','Generated Power BI reports for M365 users and groups.','Migrated mailboxes and groups from on-premises to Exchange Online.','Managed audio conferencing and Teams dial-in plans.','Created Azure API registrations and managed Graph permissions.']],
['Intune MDM Administrator',['Managed devices under Intune MDM.','Enrolled Windows devices under Autopilot.','Managed update policies for Windows, Mac, Android and iOS/iPadOS.','Upgraded Windows devices from 10 to 11.','Created configuration policies for enrollment devices and users.','Maintained devices to infrastructure standards through compliance policies.','Defined policies for co-managed devices.']],
['OKTA Admin',['Added new applications to OKTA based on client requirements.','Validated OKTA Radius agents were functional.','Integrated new OKTA agents with on-prem AD.']],
['Server Admin',['Administered Active Directory using Windows Server 2012/2016/2019.','Maintained privileged users, groups and users.','Handled ServiceNow tickets based on severity.','Created user guides for application installation and configuration.','Created scripts for changing attributes in Active Directory and Exchange.','Created SCCM 2016 deployments and packages; examined client and server logs.','Used PowerShell to automate admin tasks.']],
['CyberArk Admin',['Built CyberArk Safes and added connections as required.','Maintained PSM recording, session checks and service log reviews.','Tested CyberArk under Mac and Linux environments.','Managed EPV accounts for password authentication.','Maintained PrivateArk for accounts and safes.','Managed PVWA for RDP/VPN users.','Created connectors using AutoIt scripts.']]
]},
{role:'Service Desk Specialist – L2',company:'TECHNICOLOR India Shared Services LLP, Bengaluru',period:'Jul 2017 – Jul 2020',tags:['IAM','Azure AD','M365','OKTA','CyberArk','VDI','SCCM'],sections:[
['IAM Engineer',['Administered Active Directory using Windows Server 2012 and 2016.','Enabled remote mailboxes for Active Directory users.','Corrected user profiles upon service requests.','Added, deleted, modified and moved Active Directory user/computer accounts.','Created scripts for changing attributes in Active Directory and Exchange.','Maintained privileged users, groups and users in Active Directory.','Provided BitLocker service keys and troubleshooting.']],
['Azure AD Admin',['Managed onboarding and offboarding of users.','Maintained MFA enforcement for all users.','Managed authentication methods for allowed 2FA methods.','Monitored risk-user reports and took action on events.']],
['M365 and O365 Admin',['Managed Office 365 user account creation, deletion and modification.','Performed Office 365 domain change requests.','Resolved Exchange, Teams, Skype for Business, OneDrive and Intune issues.','Managed devices under Intune MDM.','Migrated mailboxes and groups from on-premises to Office 365.','Guided users in troubleshooting mobile devices and configuring mail clients including Outlook, MobileIron and TouchDown.','Resolved Office application issues.']],
['OKTA Engineer',['Managed OKTA applications and user profiles integrated with on-prem AD.','Troubleshot user login issues with OKTA applications.','Provided application support and troubleshooting.']],
['CyberArk Support Engineer',['Participated in CyberArk infrastructure implementation.','Managed EPV accounts for password authentication.','Maintained PrivateArk where accounts and safes reside.','Managed PVWA for RDP/VPN users.','Created connectors using AutoIt scripts.']],
['Application Support',['Implemented Citrix VDI testing.','Managed VDI environments under VMware and Citrix.','Handled ServiceNow tickets by severity and escalated to teams when needed.','Managed IBM mainframe JBA application user profiles.','Troubleshot Pulse Secure VPN issues.','Troubleshot printer queries.','Handled major incidents and collaborated with teams to provide solutions.','Managed SCCM 2016 and Windows 10 desktop.']],
['Other Activities',['Handled critical issues as Level 2 contact person.','Performed weekend emergency support.','Exported weekly and monthly KPI reports for performance review.','Created troubleshooting documentation.','Created user guide documentation for application installation and configuration.']]
]},
{role:'System Admin',company:'ADVANS IT SERVICES, Chennai',period:'Jun 2013 – Jun 2017',tags:['Windows Server','AD','Exchange','VMware','OpenVPN','SAN/NAS','AWS'],sections:[
['System Admin',['Installed, upgraded, configured and maintained Windows XP/7/8/10, Windows Server 2003/2008 R2/2012 R2/2016 and Ubuntu.','Installed, configured and administered Domain Controllers.','Administered Active Directory using Windows Server 2008 and 2012.','Configured DNS and File Systems.','Troubleshot hardware and software issues.','Provided root-level administration support for network systems.','Installed VMware ESXi and administered virtual machines.','Created group policies and administered server/shared-folder access.','Created PowerShell backup scripts and scheduled backups to file server and cloud storage.','Provided File Replication System over domain controllers.','Administered vSphere for virtual machine configuration/removal.','Installed and configured Lync Server and managed users.','Had knowledge of upgrading Lync to Skype for Business.','Installed Raspberry Pi and configured for VDI infrastructure.']],
['Exchange Admin',['Installed, configured and administered Exchange servers.','Worked extensively with MS Exchange Server 2010.','Resolved Exchange email platform issues.','Created backup scripts for mailbox and system-state backup and scheduled them daily, weekly and monthly.']],
['Remote Admin',['Configured and maintained operating systems remotely including Windows XP/7/8/10, Windows Server and Ubuntu.','Provided OpenVPN infrastructure on Linux and Windows platforms and troubleshot issues.','Troubleshot printers, software and network issues.','Monitored system, server and network issues and generated scheduled reports.']],
['Storage Admin',['Installed and configured SAN/NAS.','Worked with SPLIT, MIRROR, DISTRIBUTE and DISPERSED storage.','Supported MIRROR DISTRIBUTED storage with disaster recovery backup.']],
['Other Activities',['Provided technical expertise for IT network design, implementation, optimization and upgrade.','Worked with JIRA and Request Tracker for installation, configuration and troubleshooting.','Installed and troubleshot GitLab.','Enabled Windows AD users to authenticate in Linux machines.','Worked with Amazon Web Services EC2.','Researched open-source tools and rebuilt them for client needs.','Handled a team of 5 and played a lead role.','Recruited programmers and developers based on client requirements.']]
]},
{role:'US IT Recruiter',company:'ADVANS IT SERVICES, Chennai',period:'Jun 2012 – May 2013',tags:['Recruiting','Interviews','Offers','Onboarding'],sections:[['Recruiting Responsibilities',['Developed and implemented recruiting strategies to attract qualified IT professionals.','Used job boards, social media, professional networks and employee referrals.','Created job descriptions and employment brand materials.','Scheduled and coordinated interviews with hiring managers and team members.','Prepared candidates and interviewers for the interview process.','Gathered and synthesized feedback from interviewers.','Collaborated with hiring managers to develop competitive offers.','Negotiated salary and benefits packages with candidates.','Managed offer process including offer letters and HR onboarding coordination.']]]}
];
function renderExperiences(list=experiences){$('#experienceGrid').innerHTML=list.map((e,i)=>`<article class="exp-card" data-exp="${experiences.indexOf(e)}"><time>${e.period}</time><h3>${e.role}</h3><p>${e.company}</p><div class="tag-row">${e.tags.map(t=>`<span>${t}</span>`).join('')}</div><p><strong>${e.sections.reduce((a,s)=>a+s[1].length,0)} detailed responsibilities</strong> • Click to open full popup</p></article>`).join('');$$('.exp-card').forEach(c=>c.onclick=()=>openExp(+c.dataset.exp));}
function openExp(i){const e=experiences[i];$('#modalContent').innerHTML=`<h2>${e.role}</h2><div class="modal-meta">${e.company} • ${e.period}</div><div class="tag-row" style="margin-top:14px">${e.tags.map(t=>`<span>${t}</span>`).join('')}</div>${e.sections.map(s=>`<div class="modal-section"><h3>${s[0]}</h3><ul>${s[1].map(x=>`<li>${x}</li>`).join('')}</ul></div>`).join('')}`;$('#experienceModal').classList.add('open');$('#experienceModal').setAttribute('aria-hidden','false');}
function closeModal(){$('#experienceModal').classList.remove('open');$('#experienceModal').setAttribute('aria-hidden','true');}
$('#modalClose').onclick=closeModal;$('#experienceModal').addEventListener('click',e=>{if(e.target.id==='experienceModal')closeModal()});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
$('#experienceSearch').addEventListener('input',e=>{const q=e.target.value.toLowerCase();const filtered=experiences.filter(x=>(x.role+' '+x.company+' '+x.period+' '+x.tags.join(' ')+' '+x.sections.flat(2).join(' ')).toLowerCase().includes(q));renderExperiences(filtered);});
/* Theme toggle: persist across reloads, icon shows the mode you'll switch TO */
(function(){
  const btn=$('#themeToggle');
  const setIcon=()=>{btn.textContent=document.body.classList.contains('light')?'☾':'☀';};
  try{if(localStorage.getItem('theme')==='light')document.body.classList.add('light');}catch(e){}
  setIcon();
  btn.addEventListener('click',()=>{
    document.body.classList.toggle('light');
    setIcon();
    try{localStorage.setItem('theme',document.body.classList.contains('light')?'light':'dark');}catch(e){}
  });
})();
const ro=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting)x.target.classList.add('show')}),{threshold:.08});$$('.reveal').forEach(x=>ro.observe(x));
const co=new IntersectionObserver(es=>es.forEach(en=>{if(!en.isIntersecting)return;const el=en.target,t=+el.dataset.count;let n=0;const timer=setInterval(()=>{n+=Math.max(1,Math.ceil(t/40));if(n>=t){n=t;clearInterval(timer)}el.textContent=t>=10?n+'+':n},25);co.unobserve(el)}));$$('[data-count]').forEach(x=>co.observe(x));

const achievements=[
{type:'Certifications',title:'Microsoft 365 Certified: Copilot and Agent Administration Fundamentals',year:'2026',image:'assets/AB-900.png',summary:'Microsoft 365 Copilot and agent administration certification.',details:'Verified Microsoft certification for Copilot and Agent Administration Fundamentals. Includes credential ID, certification number, issue date, and online verification presentation.',focus:['Microsoft 365 Copilot','Agent administration','Copilot governance','Microsoft certification']},
{type:'Certifications',title:'Microsoft Applied Skills: Create Agents in Microsoft Copilot Studio',year:'2025',image:'assets/copilotstudio.png',summary:'Applied Skills credential for building agents in Microsoft Copilot Studio.',details:'Microsoft Applied Skills credential showing successful completion of requirements for creating agents in Microsoft Copilot Studio, including agent configuration and productivity automation.',focus:['Copilot Studio','Applied Skills','Agents','Automation']},
{type:'Certifications',title:'Implementing Agentic AI - Project Ready Proficient',year:'2025',image:'assets/blob.png',summary:'Microsoft Agentic AI project-ready proficiency badge.',details:'Project Ready Proficient badge for Implementing Agentic AI, supporting enterprise AI agent design, orchestration, automation, and applied AI workflow readiness.',focus:['Agentic AI','Project readiness','AI agents','Enterprise automation']},
{type:'Certifications',title:'Level Up CSP Copilot for M365 Technical Champion',year:'2024',image:'assets/level-up-csp-copilot-for-m365-technical-champion.png',summary:'Technical Champion badge for CSP Copilot for Microsoft 365.',details:'Level Up CSP Copilot for M365 Technical Champion recognition, aligned with Copilot readiness, Microsoft 365 adoption, governance, and technical enablement.',focus:['Copilot for M365','Technical champion','Adoption','Governance']},
{type:'Trainings',title:'MD-101: Managing Modern Desktops',year:'2021',image:'assets/md.jpg',summary:'Koenig certificate for MD-101 Managing Modern Desktops training.',details:'Completed MD-101: Managing Modern Desktops training. Supports Intune, Windows Autopilot, update rings, compliance policies, Windows endpoint administration, and modern desktop management.',focus:['MD-101','Modern desktop','Intune','Windows endpoint']},
{type:'Trainings',title:'CyberArk PAS Administration Course',year:'2019',image:'assets/cyb.jpg',summary:'CyberArk PAS Administration training completion.',details:'Completed CyberArk PAS Administration Course covering privileged access administration, vault workflows, access controls, and privileged session management concepts.',focus:['CyberArk','PAS','PAM','Vault administration']},
{type:'Trainings',title:'10961 Automating Administration with Windows PowerShell',year:'2020',image:'assets/ps.jpg',summary:'Microsoft official course for PowerShell administration automation.',details:'Completed Microsoft Official Course 10961 Automating Administration with Windows PowerShell, supporting automation for Active Directory, Exchange, Teams, Entra, Microsoft Graph, reporting, and admin workflows.',focus:['PowerShell','Automation','Admin scripting','Microsoft Graph']},
{type:'Trainings',title:'20703-1 Administering System Center Configuration Manager 2016',year:'2020',image:'assets/sccm.jpg',summary:'Koenig certificate for SCCM 2016 administration training.',details:'Completed Administering System Center Configuration Manager 2016 training, supporting SCCM application deployments, packages, client/server log analysis, Windows desktop administration, and endpoint operations.',focus:['SCCM 2016','Endpoint management','Application deployment','Logs']},
{type:'Certifications',title:'Microsoft Power Platform Functional Consultant',year:'Training',image:'assets/PL.png',summary:'Power Platform Functional Consultant achievement badge.',details:'Power Platform Functional Consultant achievement aligned with business process automation, reporting, integrations, and enterprise workflow improvement.',focus:['Power Platform','Functional consultant','Automation','Reporting']},
{type:'Awards',title:'Marvelous Multitasker',year:'2020',image:'assets/MM.png',summary:'Technicolor Certificate of Recognition for outstanding multitasking performance.',details:'Awarded as Marvelous Multitasker for commitment and performance throughout the year as an outstanding multitasker within the Global IT Team, India.',focus:['Award','Multitasking','Performance','Global IT Team']}
];
function renderAchievements(filter='all'){
  const grid=$('#achievementGrid');
  if(!grid)return;
  const list=filter==='all'?achievements:achievements.filter(a=>a.type===filter);
  grid.innerHTML=list.map((a)=>`<button class="achievement-card" data-ach="${achievements.indexOf(a)}" aria-label="Open ${a.title}"><div class="achievement-thumb"><img src="${a.image}" alt="${a.title} image"></div><div class="achievement-body"><span class="achievement-type">${a.type}</span><h3>${a.title}</h3><p>${a.summary}</p></div></button>`).join('');
  $$('.achievement-card').forEach(card=>card.onclick=()=>openAchievement(+card.dataset.ach));
}
function openAchievement(i){
  const a=achievements[i];
  $('#modalContent').innerHTML=`<div class="achievement-expanded"><img src="${a.image}" alt="${a.title} expanded image"><div><h2>${a.title}</h2><div class="modal-meta">${a.type} - ${a.year}</div><p>${a.details}</p><div class="facts">${a.focus.map(f=>`<div class="fact"><strong>Focus</strong><span>${f}</span></div>`).join('')}</div><div class="modal-section"><h3>Resume Reference</h3><p>This item is listed in the Awards, Certification & Trainings section of the resume and is now separated as an individual clickable achievement card.</p></div></div></div>`;
  $('#experienceModal').classList.add('open');
  $('#experienceModal').setAttribute('aria-hidden','false');
}
$$('.achievement-tab').forEach(tab=>tab.onclick=()=>{$$('.achievement-tab').forEach(t=>t.classList.remove('active'));tab.classList.add('active');renderAchievements(tab.dataset.achFilter);});

/* Interactive skills ring upgrade */
const skillColors=['#25d5ff','#7c5cff','#72f2bd','#ffb84d','#ff5c93','#a6ff4d','#4da3ff','#ff7c5c','#b85cff','#5cffd6'];
function skillColor(i){return skillColors[i%skillColors.length];}
function renderSkills(active=0){
  const legend=$('#skillsLegend');
  if(legend){
    legend.innerHTML=skills.map((s,i)=>`<button class="legend-skill" data-skill="${i}" aria-label="Show ${s.name}"><span class="legend-fill" style="width:${s.score}%;background:linear-gradient(90deg,${skillColor(i)}33,${skillColor(i)}11)"></span><span class="legend-dot" style="background:${skillColor(i)}"></span><span class="legend-title">${s.name}</span><span class="legend-meta">${s.items.length} tools</span><span class="legend-percent">${s.score}%</span></button>`).join('');
  }
  $$('.legend-skill').forEach(b=>b.onclick=()=>showSkill(+b.dataset.skill));
  showSkill(active);
}
function animatePercent(el,target,duration){
  if(!el)return;
  const start=parseFloat(el.textContent)||0;
  if(start===target){el.textContent=target+'%';return;}
  const t0=performance.now();
  cancelAnimationFrame(el.__animFrame||0);
  function step(now){
    const t=Math.min(1,(now-t0)/duration);
    /* easeOutCubic */
    const e=1-Math.pow(1-t,3);
    const v=start+(target-start)*e;
    el.textContent=Math.round(v)+'%';
    if(t<1)el.__animFrame=requestAnimationFrame(step);
  }
  el.__animFrame=requestAnimationFrame(step);
}
function showSkill(i){
  const s=skills[i];
  animatePercent($('#skillPercent'),s.score,650);
  $('#skillName').textContent=s.name;
  $('#skillDetail').innerHTML=`<h3>${s.name}</h3><p class="score">Selected capability family • ${s.score}%</p><div class="skill-summary-grid"><div class="skill-summary"><strong>Tools</strong><span>${s.items.length}</span></div><div class="skill-summary"><strong>Level</strong><span>${s.score>=90?'Expert':s.score>=85?'Advanced':'Strong'}</span></div></div><div class="tool-chip-list">${s.items.map(x=>`<span class="tool-chip">${x}</span>`).join('')}</div><div class="skill-actions"><button class="small-btn" onclick="openSkillModal(${i})">Open full view</button><button class="small-btn" onclick="document.getElementById('experienceSearch').value='${s.name.split('/')[0]}';document.getElementById('experienceSearch').dispatchEvent(new Event('input'))">Filter experience</button></div>`;
  $$('.legend-skill').forEach((c,idx)=>c.classList.toggle('active',idx===i));
  if(window.skillsChart){
    window.skillsChart.setActiveElements([{datasetIndex:0,index:i}]);
    window.skillsChart.tooltip.setActiveElements([{datasetIndex:0,index:i}],{x:0,y:0});
    window.skillsChart.update();
  }
}
function openSkillModal(i){
  const s=skills[i];
  $('#modalContent').innerHTML=`<h2>${s.name}</h2><div class="modal-meta">Interactive skill detail • ${s.score}% capability score</div><div class="modal-skill-grid"><div class="modal-skill-score"><strong>${s.score}%</strong><p>${s.items.length} tools and capabilities</p><div class="bar"><i style="width:${s.score}%"></i></div></div><div><h3>Full tools display</h3><ul class="modal-skill-tools">${s.items.map(x=>`<li>${x}</li>`).join('')}</ul></div></div>`;
  $('#experienceModal').classList.add('open');
  $('#experienceModal').setAttribute('aria-hidden','false');
}
function charts(){
  /* CONCENTRIC SKILLS RINGS — custom canvas renderer.
     10 thin arcs, one per skill, each at its own radius. Arc length encodes
     the skill score (%). Active ring pulses & glows brighter. Hover any ring
     to preview that skill; click to open the full detail modal.
     We expose window.skillsChart as a thin shim that mimics the methods used
     elsewhere in the codebase (setActiveElements, update). */
  const ring=document.getElementById('skillsRing');
  if(!ring)return;
  const ctx=ring.getContext('2d');
  let dpr=Math.max(1,window.devicePixelRatio||1);
  let cssW=0,cssH=0;

  /* High-DPI sizing — keep canvas physical pixels in sync with its CSS size */
  function resize(){
    const rect=ring.getBoundingClientRect();
    cssW=Math.max(40,rect.width);
    cssH=Math.max(40,rect.height);
    dpr=Math.max(1,window.devicePixelRatio||1);
    ring.width=Math.round(cssW*dpr);
    ring.height=Math.round(cssH*dpr);
  }
  resize();

  /* Animation state */
  let entry=0;                /* 0..1 — sweep-in on first render */
  let entryStart=performance.now();
  const ENTRY_MS=1100;
  let pulse=0;                /* drives active-ring glow pulse */
  let lastT=performance.now();
  let hoverIdx=-1;
  let activeIdx=0;

  /* Geometry constants (computed each frame from current CSS size).
     ringCount tracks per skill. */
  function geometry(){
    const cx=cssW/2, cy=cssH/2;
    /* Outer ring near the canvas edge with a comfortable margin */
    const maxR=Math.min(cssW,cssH)/2 - 22;
    /* Inner ring stops well clear of center text */
    const minR=Math.max(110,maxR*0.50);
    const n=skills.length;
    /* Distribute n rings evenly between minR and maxR */
    const span=maxR-minR;
    const trackThickness=Math.max(5,Math.min(11,span/(n*1.7)));
    const step=span/(n-1);
    return {cx,cy,maxR,minR,n,step,trackThickness};
  }

  /* Hit test — given a mouse point in CSS pixels, return the skill index whose
     ring you clicked / hovered (or -1). */
  function hitTest(mx,my){
    const {cx,cy,minR,maxR,n,step,trackThickness}=geometry();
    const dx=mx-cx, dy=my-cy;
    const dist=Math.hypot(dx,dy);
    if(dist>maxR+8||dist<minR-trackThickness-8)return -1;
    for(let i=0;i<n;i++){
      const r=maxR-i*step;
      if(Math.abs(dist-r)<=trackThickness*0.8+2)return i;
    }
    return -1;
  }

  /* Paint */
  function draw(now){
    if(!cssW||!cssH)return;
    const isLight=document.body.classList.contains('light');
    entry=Math.min(1,(now-entryStart)/ENTRY_MS);
    /* easeOutCubic */
    const e=1-Math.pow(1-entry,3);

    /* Clear with transparency so the surrounding panel shows through */
    ctx.save();
    ctx.scale(dpr,dpr);
    ctx.clearRect(0,0,cssW,cssH);

    const {cx,cy,minR,maxR,n,step,trackThickness}=geometry();

    /* Soft halo behind everything */
    const halo=ctx.createRadialGradient(cx,cy,maxR*0.5,cx,cy,maxR+30);
    if(isLight){
      halo.addColorStop(0,'rgba(10,134,196,.06)');
      halo.addColorStop(0.7,'rgba(124,92,255,.05)');
      halo.addColorStop(1,'rgba(10,134,196,0)');
    }else{
      halo.addColorStop(0,'rgba(37,213,255,.16)');
      halo.addColorStop(0.7,'rgba(124,92,255,.08)');
      halo.addColorStop(1,'rgba(37,213,255,0)');
    }
    ctx.fillStyle=halo;
    ctx.beginPath();
    ctx.arc(cx,cy,maxR+30,0,Math.PI*2);
    ctx.fill();

    /* Each skill ring. Start angle at top (-π/2), sweep clockwise. */
    const start=-Math.PI/2;
    ctx.lineCap='round';
    for(let i=0;i<n;i++){
      const r=maxR-i*step;
      const score=skills[i].score;
      const color=skillColor(i);
      const active=i===activeIdx;
      const hovered=i===hoverIdx;

      /* Track (full circle background) */
      ctx.beginPath();
      ctx.arc(cx,cy,r,0,Math.PI*2);
      ctx.lineWidth=trackThickness;
      ctx.strokeStyle=isLight?'rgba(11,26,51,.06)':'rgba(160,200,255,.06)';
      ctx.stroke();

      /* Animated arc length — sweeps in with the entry easing,
         staggered slightly per ring for a cascading effect */
      const stagger=Math.max(0,(e-i*0.06)/(1-i*0.06));
      const ringEntry=Math.max(0,Math.min(1,stagger));
      const arcSweep=(score/100)*Math.PI*2*ringEntry;

      /* Per-ring glow color */
      ctx.shadowColor=color;
      ctx.shadowBlur=(active?18:8)+(hovered?6:0);

      /* Draw the value arc */
      ctx.beginPath();
      ctx.arc(cx,cy,r,start,start+arcSweep);
      ctx.lineWidth=trackThickness*(active?1.18:1);
      /* Bright gradient stroke for active, plain color otherwise */
      if(active){
        const grad=ctx.createLinearGradient(cx-r,cy,cx+r,cy);
        grad.addColorStop(0,shade(color,-10));
        grad.addColorStop(0.5,shade(color,18));
        grad.addColorStop(1,color);
        ctx.strokeStyle=grad;
      }else{
        ctx.strokeStyle=color;
      }
      ctx.stroke();
      ctx.shadowBlur=0;

      /* Pulse highlight on the active ring */
      if(active && ringEntry>=1){
        const pa=0.35+0.35*Math.sin(pulse*Math.PI*2);
        ctx.beginPath();
        ctx.arc(cx,cy,r,start,start+arcSweep);
        ctx.lineWidth=trackThickness*1.18;
        ctx.strokeStyle=`rgba(255,255,255,${pa*0.25})`;
        ctx.stroke();
      }

      /* Cap dot at the end of the value arc */
      if(ringEntry>0.05){
        const endAng=start+arcSweep;
        const ex=cx+Math.cos(endAng)*r;
        const ey=cy+Math.sin(endAng)*r;
        ctx.beginPath();
        ctx.arc(ex,ey,trackThickness*(active?0.78:0.55),0,Math.PI*2);
        ctx.fillStyle=active?shade(color,30):color;
        ctx.shadowColor=color;
        ctx.shadowBlur=active?14:6;
        ctx.fill();
        ctx.shadowBlur=0;
      }
    }
    ctx.restore();
  }

  function loop(now){
    const dt=Math.min(80,now-lastT);
    lastT=now;
    pulse=(pulse+dt/2400)%1;
    draw(now);
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);

  /* Mouse / pointer interaction */
  function pointerXY(ev){
    const rect=ring.getBoundingClientRect();
    return {x:ev.clientX-rect.left, y:ev.clientY-rect.top};
  }
  ring.addEventListener('mousemove',ev=>{
    const {x,y}=pointerXY(ev);
    const idx=hitTest(x,y);
    if(idx!==hoverIdx){
      hoverIdx=idx;
      ring.style.cursor=idx>=0?'pointer':'default';
      if(idx>=0)showSkill(idx);
    }
  });
  ring.addEventListener('mouseleave',()=>{
    hoverIdx=-1;
    ring.style.cursor='default';
  });
  ring.addEventListener('click',ev=>{
    const {x,y}=pointerXY(ev);
    const idx=hitTest(x,y);
    if(idx>=0)openSkillModal(idx);
  });

  /* Resize handling */
  const ro=new ResizeObserver(()=>{
    resize();
    /* Restart the entry sweep when size changes substantially */
  });
  ro.observe(ring);

  /* Skill auto-rotation and external code call setActiveElements + update.
     Provide a tiny shim with the same shape so nothing else has to change. */
  window.skillsChart={
    setActiveElements(els){
      if(els&&els.length){activeIdx=els[0].index;}
    },
    update(){/* no-op — our rAF loop redraws every frame */},
    tooltip:{setActiveElements(){}}
  };
}

/* Helper: lighten/darken a hex color by a percentage (-100..100) */
function shade(hex,pct){
  const c=hex.replace('#','');
  const n=c.length===3?c.split('').map(x=>x+x).join(''):c;
  const r=parseInt(n.slice(0,2),16),g=parseInt(n.slice(2,4),16),b=parseInt(n.slice(4,6),16);
  const amt=Math.round(2.55*pct);
  const clamp=v=>Math.max(0,Math.min(255,v+amt));
  return `rgb(${clamp(r)},${clamp(g)},${clamp(b)})`;
}

/* Safe startup: initialize after all interactive constants/functions are loaded. */
window.addEventListener('DOMContentLoaded', () => {
  try {
    renderSkills(0);
    renderExperiences();
    renderAchievements();
    charts();
    showSkill(0);
  } catch (err) {
    console.error('Dashboard startup failed:', err);
    const detail = document.getElementById('skillDetail');
    if (detail) detail.innerHTML = '<h3>Skills</h3><p>Unable to load interactive chart, but skill data is available in the cards below.</p>';
  }
});

/* Credential profile cards are static links in index.html. No live scraping is used. */


/* Scroll spy for the floating icon rail — highlights the section currently in view */
(function(){
  const links=$$('.rail-nav a');
  if(!links.length)return;
  const map=new Map();
  links.forEach(a=>{
    const id=a.getAttribute('href');
    if(id&&id.startsWith('#')){
      const sec=document.querySelector(id);
      if(sec)map.set(sec,a);
    }
  });
  if(!map.size)return;
  const setActive=el=>{
    links.forEach(a=>a.classList.remove('active'));
    const link=map.get(el);
    if(link)link.classList.add('active');
  };
  const io=new IntersectionObserver(entries=>{
    // pick the entry closest to the top that is intersecting
    const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>a.boundingClientRect.top-b.boundingClientRect.top);
    if(visible[0])setActive(visible[0].target);
  },{rootMargin:'-30% 0px -55% 0px',threshold:0});
  map.forEach((_,sec)=>io.observe(sec));
  // also update on click immediately for responsiveness
  links.forEach(a=>a.addEventListener('click',()=>{links.forEach(x=>x.classList.remove('active'));a.classList.add('active');}));
})();


/* ===========================================================
   ORBIT RADAR — chips orbit continuously, sweep-aware pulse,
   one chip at a time flies to center.
   All motion is driven by a single rAF loop for reliability.
   =========================================================== */
(function(){
  const radar=document.getElementById('domainRadar');
  if(!radar||!radar.classList.contains('orbit-radar'))return;
  const chips=Array.from(radar.querySelectorAll('.radar-chip'));
  const sweepRotor=radar.querySelector('.sweep-rotor');
  const radarGrid=radar.querySelector('.radar-grid');
  if(!chips.length)return;

  const reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  console.log('[orbit-radar] starting — chips:',chips.length,'reduced-motion:',reduce,'(ignored)');

  /* Per-chip state */
  chips.forEach((chip,i)=>{
    chip.__baseAngle=parseFloat(chip.dataset.angle||'0');  // degrees
    chip.__focusT=0;
    chip.__targetT=0;
    chip.__pulse=0;        // 0..1 — flash from sweep
    chip.__bobPhase=i*1.0; // staggered bobbing offset
  });

  /* Smooth ease */
  const ease=t=>t<0.5?2*t*t:1-Math.pow(-2*t+2,2)/2;
  /* Normalize angle to 0..360 */
  const norm=a=>((a%360)+360)%360;

  /* Speeds (deg per second). Full speed regardless of reduced-motion preference,
     since this is the centerpiece feature and the motion is gentle. */
  const ORBIT_SPEED=13;
  const SWEEP_SPEED=80;
  const GRID_SPEED=4;

  /* Animation state */
  let drift=0,sweep=0,gridRot=0;
  let lastT=performance.now();
  let visible=true;

  /* Compute orbit radius from radar size */
  function getOrbitR(){
    const w=radar.clientWidth||radar.offsetWidth||300;
    return Math.max(80,w*0.38);
  }

  function frame(now){
    const dt=visible?Math.min(80,now-lastT):0;
    lastT=now;

    drift=(drift+dt*ORBIT_SPEED/1000)%360;
    sweep=(sweep+dt*SWEEP_SPEED/1000)%360;
    gridRot=(gridRot+dt*GRID_SPEED/1000)%360;

    /* Drive sweep + grid via JS instead of CSS animations so they stay reliable. */
    if(sweepRotor)sweepRotor.setAttribute('transform','rotate('+sweep+')');
    if(radarGrid)radarGrid.style.transform='rotate('+gridRot+'deg)';

    const r=getOrbitR();
    const tNow=now/1000;

    chips.forEach(chip=>{
      /* Smooth focus transition */
      const fSpeed=dt/280;
      if(chip.__focusT<chip.__targetT)chip.__focusT=Math.min(chip.__targetT,chip.__focusT+fSpeed);
      else if(chip.__focusT>chip.__targetT)chip.__focusT=Math.max(chip.__targetT,chip.__focusT-fSpeed);
      const fT=ease(chip.__focusT);

      /* Sweep-aware pulse: when the sweep angle passes the chip angle, flash */
      const chipAng=norm(chip.__baseAngle+drift);
      const sweepAng=norm(sweep-90); // sweep starts at -90 (up) due to viewBox; align
      let delta=Math.abs(chipAng-sweepAng);
      if(delta>180)delta=360-delta;
      /* Trigger pulse if sweep is within a small wedge */
      if(delta<6&&chip.__pulse<=0.05)chip.__pulse=1;
      /* Decay pulse */
      chip.__pulse=Math.max(0,chip.__pulse-dt/700);

      /* Subtle radial bob ±4px on a 3.5s cycle, staggered */
      const bob=Math.sin(tNow*1.8+chip.__bobPhase)*4;

      /* Orbital position */
      const a=(chip.__baseAngle+drift)*Math.PI/180;
      const ox=Math.cos(a)*(r+bob);
      const oy=Math.sin(a)*(r+bob);
      /* Lerp toward center on focus */
      const x=ox*(1-fT);
      const y=oy*(1-fT);
      const scale=1+0.55*fT+0.08*chip.__pulse;
      chip.style.transform=`translate(-50%,-50%) translate(${x}px,${y}px) scale(${scale})`;
      chip.style.boxShadow=chip.__pulse>0.05
        ? `0 0 ${10+chip.__pulse*20}px rgba(37,213,255,${0.3+chip.__pulse*0.5}), 0 10px 28px rgba(0,0,0,.35)`
        : '';
    });

    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);

  /* Pause time accumulation when tab hidden */
  document.addEventListener('visibilitychange',()=>{
    visible=!document.hidden;
    if(visible)lastT=performance.now();
  });

  /* Focus cycle */
  let idx=0,timer=null,focusedChip=null;
  const FOCUS_HOLD=1500,REST=900;

  function setFocused(chip,on){
    chip.__targetT=on?1:0;
    chip.classList.toggle('focused',on);
  }
  function focusNext(){
    timer=setTimeout(()=>{
      const chip=chips[idx%chips.length];
      idx++;
      focusedChip=chip;
      setFocused(chip,true);
      radar.classList.add('focusing');
      timer=setTimeout(()=>{
        setFocused(chip,false);
        focusedChip=null;
        radar.classList.remove('focusing');
        timer=setTimeout(focusNext,REST);
      },FOCUS_HOLD);
    },REST);
  }
  function stopCycle(){
    if(timer){clearTimeout(timer);timer=null;}
    if(focusedChip){setFocused(focusedChip,false);focusedChip=null;}
    radar.classList.remove('focusing');
  }
  document.addEventListener('visibilitychange',()=>{
    if(document.hidden)stopCycle();
    else if(!timer)focusNext();
  });

  chips.forEach(chip=>{
    chip.addEventListener('click',()=>{
      stopCycle();
      focusedChip=chip;
      setFocused(chip,true);
      radar.classList.add('focusing');
      idx=chips.indexOf(chip)+1;
      timer=setTimeout(()=>{
        setFocused(chip,false);
        focusedChip=null;
        radar.classList.remove('focusing');
        timer=setTimeout(focusNext,REST);
      },FOCUS_HOLD);
    });
  });

  focusNext();
})();


/* ===========================================================
   AUTO-ROTATE SKILLS RING — cycles through each skill family every
   few seconds. Pauses when the user interacts; resumes when they go
   quiet. Stops while the section is off-screen or the tab is hidden.
   =========================================================== */
(function(){
  const ring=document.getElementById('skillsRing');
  const section=document.getElementById('skills');
  if(!ring||!section)return;
  const showSkillFn=window.showSkill||(typeof showSkill==='function'?showSkill:null);
  if(typeof showSkillFn!=='function')return;
  if(!Array.isArray(skills)||!skills.length)return;

  const TICK=3500;        // ms between auto-advances
  const RESUME_AFTER=12000; // ms of inactivity before auto-rotation resumes after user interaction

  let idx=0;
  let timer=null;
  let pausedUntil=0;       // timestamp; auto-rotate resumes after this
  let onScreen=false;
  let visible=!document.hidden;
  let hovering=false;      // true while mouse is over the ring

  function currentActive(){
    /* Find which skill is currently shown by inspecting the active card/legend.
       Falls back to internal idx if nothing is marked. */
    const el=document.querySelector('.legend-skill.active');
    if(el&&el.dataset.skill!=null){
      const v=parseInt(el.dataset.skill,10);
      if(!isNaN(v))return v;
    }
    return idx;
  }

  function nextTick(){
    timer=setTimeout(()=>{
      if(!onScreen||!visible||hovering){timer=null;return;}
      if(Date.now()<pausedUntil){
        timer=setTimeout(nextTick,Math.max(400,pausedUntil-Date.now()));
        return;
      }
      idx=(currentActive()+1)%skills.length;
      try{showSkillFn(idx);}catch(e){console.warn('[skills-rotate]',e);}
      nextTick();
    },TICK);
  }
  function start(){if(!timer&&!hovering)nextTick();}
  function stop(){if(timer){clearTimeout(timer);timer=null;}}

  /* Mark interaction → pause auto-rotation for RESUME_AFTER ms.
     Also keep our internal idx in sync so when we resume we advance from the user's selection. */
  function markInteraction(skillIdx){
    pausedUntil=Date.now()+RESUME_AFTER;
    if(typeof skillIdx==='number'&&skillIdx>=0)idx=skillIdx;
  }

  /* Watch the section visibility — any sliver visible counts (threshold 0) */
  const io=new IntersectionObserver(entries=>{
    entries.forEach(e=>{onScreen=e.isIntersecting;});
    if(onScreen&&visible)start();else stop();
  });
  io.observe(section);

  /* Fallback: if the section is already visible at startup, kick things off
     immediately rather than waiting for the IO callback. */
  setTimeout(()=>{
    if(timer)return;
    const r=section.getBoundingClientRect();
    const inView=r.top<innerHeight&&r.bottom>0;
    if(inView&&visible){onScreen=true;start();}
  },300);

  /* Tab visibility */
  document.addEventListener('visibilitychange',()=>{
    visible=!document.hidden;
    if(visible&&onScreen)start();else stop();
  });

  /* Only explicit clicks count as interaction. Hovering over the doughnut
     (which Chart.js uses for previewing segments) does NOT pause rotation. */
  section.addEventListener('click',e=>{
    const card=e.target.closest('[data-skill]');
    if(card)markInteraction(parseInt(card.dataset.skill,10));
    else markInteraction();
  });
  /* Touch users: pause when they tap inside the section (a real intent signal) */
  section.addEventListener('touchstart',e=>{
    const card=e.target.closest('[data-skill]');
    if(card)markInteraction(parseInt(card.dataset.skill,10));
  },{passive:true});

  /* Hover over the ring pauses auto-rotation; leaving resumes it. */
  ring.addEventListener('mouseenter',()=>{
    hovering=true;
    stop();
  });
  ring.addEventListener('mouseleave',()=>{
    hovering=false;
    if(onScreen&&visible)start();
  });

  console.log('[skills-rotate] ready — '+skills.length+' skills, '+TICK+'ms tick');
})();


/* ===========================================================
   TYPED ROLE TAGLINE — cycles through roles with typewriter effect
   =========================================================== */
(function(){
  const el=document.getElementById('typedRole');
  if(!el)return;
  const roles=[
    'Client Infrastructure Architect',
    'Windows 365 Solution Architect',
    'Power Apps Consultant',
    'Modern Desktop Administrator',
    'System Admin',
    'M365 Administrator',
    'AI @ Work'
  ];

  const TYPE_MS=55;       // ms per character while typing
  const ERASE_MS=28;      // ms per character while erasing
  const HOLD_MS=1500;     // pause once a role is fully typed
  const GAP_MS=350;       // pause between roles after erasing

  /* Note: prefers-reduced-motion is intentionally NOT honored here.
     The typewriter is gentle and the user explicitly asked for it. */

  let i=0,pos=0,mode='typing';
  function tick(){
    const word=roles[i];
    if(mode==='typing'){
      pos++;
      el.textContent=word.slice(0,pos);
      if(pos>=word.length){mode='holding';setTimeout(tick,HOLD_MS);return;}
      setTimeout(tick,TYPE_MS);
    }else if(mode==='holding'){
      mode='erasing';setTimeout(tick,ERASE_MS);
    }else if(mode==='erasing'){
      pos--;
      el.textContent=word.slice(0,pos);
      if(pos<=0){
        mode='typing';
        i=(i+1)%roles.length;
        setTimeout(tick,GAP_MS);
        return;
      }
      setTimeout(tick,ERASE_MS);
    }
  }
  tick();
})();
