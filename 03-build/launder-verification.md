# Launder Verification Report
Generated: 2026-05-23 22:30:07

## Official Sourcing Attempts

- `changan-uni-t`: 0 official downloads. Fallback reason: playwright failed: BrowserType.launch: Target page, context or browser has been closed
Browser logs:

<launching> /Users/linlin/Library/Caches/ms-playwright/chromium_headless_shell-1187/chrome-mac/headless_shell --disable-field-trial-config --disable-background-networking --disable-background-timer-throttling --disable-backgrounding-occluded-windows --disable-back-forward-cache --disable-breakpad --disable-client-side-phishing-detection --disable-component-extensions-with-background-pages --disable-component-update --no-default-browser-check --disable-default-apps --disable-dev-shm-usage --disable-extensions --disable-features=AcceptCHFrame,AvoidUnnecessaryBeforeUnloadCheckSync,DestroyProfileOnBrowserClose,DialMediaRouteProvider,GlobalMediaControls,HttpsUpgrades,LensOverlay,MediaRouter,PaintHolding,ThirdPartyStoragePartitioning,Translate,AutoDeElevate --allow-pre-commit-input --disable-hang-monitor --disable-ipc-flooding-protection --disable-popup-blocking --disable-prompt-on-repost --disable-renderer-backgrounding --force-color-profile=srgb --metrics-recording-only --no-first-run --password-store=basic --use-mock-keychain --no-service-autorun --export-tagged-pdf --disable-search-engine-choice-screen --unsafely-disable-devtools-self-xss-warnings --edge-skip-compat-layer-relaunch --enable-automation --enable-unsafe-swiftshader --headless --hide-scrollbars --mute-audio --blink-settings=primaryHoverType=2,availableHoverTypes=2,primaryPointerType=4,availablePointerTypes=4 --no-sandbox --user-data-dir=/var/folders/sp/clywph7j34l6psmb6hphsy5h0000gn/T/playwright_chromiumdev_profile-4sQcZQ --remote-debugging-pipe --no-startup-window
<launched> pid=38192
[pid=38192][err] [0523/222636.135007:ERROR:base/power_monitor/thermal_state_observer_mac.mm:140] ThermalStateObserverMac unable to register to power notifications. Result: 9
[pid=38192][err] [0523/222636.155413:ERROR:net/dns/dns_config_service_posix.cc:142] DNS config watch failed to start.
[pid=38192][err] [0523/222636.158858:WARNING:net/dns/dns_config_service_posix.cc:201] Failed to read DnsConfig.
[pid=38192][err] [0523/222636.164552:FATAL:base/apple/mach_port_rendezvous_mac.cc:158] Check failed: kr == KERN_SUCCESS. bootstrap_check_in org.chromium.Chromium.MachPortRendezvousServer.38192: Permission denied (1100)
[pid=38192] <process did exit: exitCode=null, signal=SIGTRAP>
[pid=38192] starting temporary directories cleanup
Call log:
  - <launching> /Users/linlin/Library/Caches/ms-playwright/chromium_headless_shell-1187/chrome-mac/headless_shell --disable-field-trial-config --disable-background-networking --disable-background-timer-throttling --disable-backgrounding-occluded-windows --disable-back-forward-cache --disable-breakpad --disable-client-side-phishing-detection --disable-component-extensions-with-background-pages --disable-component-update --no-default-browser-check --disable-default-apps --disable-dev-shm-usage --disable-extensions --disable-features=AcceptCHFrame,AvoidUnnecessaryBeforeUnloadCheckSync,DestroyProfileOnBrowserClose,DialMediaRouteProvider,GlobalMediaControls,HttpsUpgrades,LensOverlay,MediaRouter,PaintHolding,ThirdPartyStoragePartitioning,Translate,AutoDeElevate --allow-pre-commit-input --disable-hang-monitor --disable-ipc-flooding-protection --disable-popup-blocking --disable-prompt-on-repost --disable-renderer-backgrounding --force-color-profile=srgb --metrics-recording-only --no-first-run --password-store=basic --use-mock-keychain --no-service-autorun --export-tagged-pdf --disable-search-engine-choice-screen --unsafely-disable-devtools-self-xss-warnings --edge-skip-compat-layer-relaunch --enable-automation --enable-unsafe-swiftshader --headless --hide-scrollbars --mute-audio --blink-settings=primaryHoverType=2,availableHoverTypes=2,primaryPointerType=4,availablePointerTypes=4 --no-sandbox --user-data-dir=/var/folders/sp/clywph7j34l6psmb6hphsy5h0000gn/T/playwright_chromiumdev_profile-4sQcZQ --remote-debugging-pipe --no-startup-window
  - <launched> pid=38192
  - [pid=38192][err] [0523/222636.135007:ERROR:base/power_monitor/thermal_state_observer_mac.mm:140] ThermalStateObserverMac unable to register to power notifications. Result: 9
  - [pid=38192][err] [0523/222636.155413:ERROR:net/dns/dns_config_service_posix.cc:142] DNS config watch failed to start.
  - [pid=38192][err] [0523/222636.158858:WARNING:net/dns/dns_config_service_posix.cc:201] Failed to read DnsConfig.
  - [pid=38192][err] [0523/222636.164552:FATAL:base/apple/mach_port_rendezvous_mac.cc:158] Check failed: kr == KERN_SUCCESS. bootstrap_check_in org.chromium.Chromium.MachPortRendezvousServer.38192: Permission denied (1100)
  - [pid=38192] <process did exit: exitCode=null, signal=SIGTRAP>
  - [pid=38192] starting temporary directories cleanup
  - [pid=38192] <gracefully close start>
  - [pid=38192] <kill>
  - [pid=38192] <skipped force kill spawnedProcess.killed=false processClosed=true>
  - [pid=38192] finished temporary directories cleanup
  - [pid=38192] <gracefully close end>
.
- `changan-cs55-plus`: 0 official downloads. Fallback reason: playwright failed: BrowserType.launch: Target page, context or browser has been closed
Browser logs:

<launching> /Users/linlin/Library/Caches/ms-playwright/chromium_headless_shell-1187/chrome-mac/headless_shell --disable-field-trial-config --disable-background-networking --disable-background-timer-throttling --disable-backgrounding-occluded-windows --disable-back-forward-cache --disable-breakpad --disable-client-side-phishing-detection --disable-component-extensions-with-background-pages --disable-component-update --no-default-browser-check --disable-default-apps --disable-dev-shm-usage --disable-extensions --disable-features=AcceptCHFrame,AvoidUnnecessaryBeforeUnloadCheckSync,DestroyProfileOnBrowserClose,DialMediaRouteProvider,GlobalMediaControls,HttpsUpgrades,LensOverlay,MediaRouter,PaintHolding,ThirdPartyStoragePartitioning,Translate,AutoDeElevate --allow-pre-commit-input --disable-hang-monitor --disable-ipc-flooding-protection --disable-popup-blocking --disable-prompt-on-repost --disable-renderer-backgrounding --force-color-profile=srgb --metrics-recording-only --no-first-run --password-store=basic --use-mock-keychain --no-service-autorun --export-tagged-pdf --disable-search-engine-choice-screen --unsafely-disable-devtools-self-xss-warnings --edge-skip-compat-layer-relaunch --enable-automation --enable-unsafe-swiftshader --headless --hide-scrollbars --mute-audio --blink-settings=primaryHoverType=2,availableHoverTypes=2,primaryPointerType=4,availablePointerTypes=4 --no-sandbox --user-data-dir=/var/folders/sp/clywph7j34l6psmb6hphsy5h0000gn/T/playwright_chromiumdev_profile-dwZq8g --remote-debugging-pipe --no-startup-window
<launched> pid=38229
[pid=38229][err] [0523/222636.781839:ERROR:base/power_monitor/thermal_state_observer_mac.mm:140] ThermalStateObserverMac unable to register to power notifications. Result: 9
[pid=38229][err] [0523/222636.783447:ERROR:net/dns/dns_config_service_posix.cc:142] DNS config watch failed to start.
[pid=38229][err] [0523/222636.783904:FATAL:base/apple/mach_port_rendezvous_mac.cc:158] Check failed: kr == KERN_SUCCESS. bootstrap_check_in org.chromium.Chromium.MachPortRendezvousServer.38229: Permission denied (1100)
Call log:
  - <launching> /Users/linlin/Library/Caches/ms-playwright/chromium_headless_shell-1187/chrome-mac/headless_shell --disable-field-trial-config --disable-background-networking --disable-background-timer-throttling --disable-backgrounding-occluded-windows --disable-back-forward-cache --disable-breakpad --disable-client-side-phishing-detection --disable-component-extensions-with-background-pages --disable-component-update --no-default-browser-check --disable-default-apps --disable-dev-shm-usage --disable-extensions --disable-features=AcceptCHFrame,AvoidUnnecessaryBeforeUnloadCheckSync,DestroyProfileOnBrowserClose,DialMediaRouteProvider,GlobalMediaControls,HttpsUpgrades,LensOverlay,MediaRouter,PaintHolding,ThirdPartyStoragePartitioning,Translate,AutoDeElevate --allow-pre-commit-input --disable-hang-monitor --disable-ipc-flooding-protection --disable-popup-blocking --disable-prompt-on-repost --disable-renderer-backgrounding --force-color-profile=srgb --metrics-recording-only --no-first-run --password-store=basic --use-mock-keychain --no-service-autorun --export-tagged-pdf --disable-search-engine-choice-screen --unsafely-disable-devtools-self-xss-warnings --edge-skip-compat-layer-relaunch --enable-automation --enable-unsafe-swiftshader --headless --hide-scrollbars --mute-audio --blink-settings=primaryHoverType=2,availableHoverTypes=2,primaryPointerType=4,availablePointerTypes=4 --no-sandbox --user-data-dir=/var/folders/sp/clywph7j34l6psmb6hphsy5h0000gn/T/playwright_chromiumdev_profile-dwZq8g --remote-debugging-pipe --no-startup-window
  - <launched> pid=38229
  - [pid=38229][err] [0523/222636.781839:ERROR:base/power_monitor/thermal_state_observer_mac.mm:140] ThermalStateObserverMac unable to register to power notifications. Result: 9
  - [pid=38229][err] [0523/222636.783447:ERROR:net/dns/dns_config_service_posix.cc:142] DNS config watch failed to start.
  - [pid=38229][err] [0523/222636.783904:FATAL:base/apple/mach_port_rendezvous_mac.cc:158] Check failed: kr == KERN_SUCCESS. bootstrap_check_in org.chromium.Chromium.MachPortRendezvousServer.38229: Permission denied (1100)
  - [pid=38229] <gracefully close start>
  - [pid=38229] <kill>
  - [pid=38229] <will force kill>
  - [pid=38229] exception while trying to kill process: Error: kill EPERM
  - [pid=38229] <process did exit: exitCode=null, signal=SIGTRAP>
  - [pid=38229] starting temporary directories cleanup
  - [pid=38229] finished temporary directories cleanup
  - [pid=38229] <gracefully close end>
.
- `deepal-s05`: 0 official downloads. Fallback reason: playwright failed: BrowserType.launch: Target page, context or browser has been closed
Browser logs:

<launching> /Users/linlin/Library/Caches/ms-playwright/chromium_headless_shell-1187/chrome-mac/headless_shell --disable-field-trial-config --disable-background-networking --disable-background-timer-throttling --disable-backgrounding-occluded-windows --disable-back-forward-cache --disable-breakpad --disable-client-side-phishing-detection --disable-component-extensions-with-background-pages --disable-component-update --no-default-browser-check --disable-default-apps --disable-dev-shm-usage --disable-extensions --disable-features=AcceptCHFrame,AvoidUnnecessaryBeforeUnloadCheckSync,DestroyProfileOnBrowserClose,DialMediaRouteProvider,GlobalMediaControls,HttpsUpgrades,LensOverlay,MediaRouter,PaintHolding,ThirdPartyStoragePartitioning,Translate,AutoDeElevate --allow-pre-commit-input --disable-hang-monitor --disable-ipc-flooding-protection --disable-popup-blocking --disable-prompt-on-repost --disable-renderer-backgrounding --force-color-profile=srgb --metrics-recording-only --no-first-run --password-store=basic --use-mock-keychain --no-service-autorun --export-tagged-pdf --disable-search-engine-choice-screen --unsafely-disable-devtools-self-xss-warnings --edge-skip-compat-layer-relaunch --enable-automation --enable-unsafe-swiftshader --headless --hide-scrollbars --mute-audio --blink-settings=primaryHoverType=2,availableHoverTypes=2,primaryPointerType=4,availablePointerTypes=4 --no-sandbox --user-data-dir=/var/folders/sp/clywph7j34l6psmb6hphsy5h0000gn/T/playwright_chromiumdev_profile-yE6OXT --remote-debugging-pipe --no-startup-window
<launched> pid=38233
[pid=38233][err] [0523/222637.529665:ERROR:base/power_monitor/thermal_state_observer_mac.mm:140] ThermalStateObserverMac unable to register to power notifications. Result: 9
[pid=38233][err] [0523/222637.531396:ERROR:net/dns/dns_config_service_posix.cc:142] DNS config watch failed to start.
[pid=38233][err] [0523/222637.532009:WARNING:net/dns/dns_config_service_posix.cc:201] Failed to read DnsConfig.
[pid=38233][err] [0523/222637.532010:FATAL:base/apple/mach_port_rendezvous_mac.cc:158] Check failed: kr == KERN_SUCCESS. bootstrap_check_in org.chromium.Chromium.MachPortRendezvousServer.38233: Permission denied (1100)
Call log:
  - <launching> /Users/linlin/Library/Caches/ms-playwright/chromium_headless_shell-1187/chrome-mac/headless_shell --disable-field-trial-config --disable-background-networking --disable-background-timer-throttling --disable-backgrounding-occluded-windows --disable-back-forward-cache --disable-breakpad --disable-client-side-phishing-detection --disable-component-extensions-with-background-pages --disable-component-update --no-default-browser-check --disable-default-apps --disable-dev-shm-usage --disable-extensions --disable-features=AcceptCHFrame,AvoidUnnecessaryBeforeUnloadCheckSync,DestroyProfileOnBrowserClose,DialMediaRouteProvider,GlobalMediaControls,HttpsUpgrades,LensOverlay,MediaRouter,PaintHolding,ThirdPartyStoragePartitioning,Translate,AutoDeElevate --allow-pre-commit-input --disable-hang-monitor --disable-ipc-flooding-protection --disable-popup-blocking --disable-prompt-on-repost --disable-renderer-backgrounding --force-color-profile=srgb --metrics-recording-only --no-first-run --password-store=basic --use-mock-keychain --no-service-autorun --export-tagged-pdf --disable-search-engine-choice-screen --unsafely-disable-devtools-self-xss-warnings --edge-skip-compat-layer-relaunch --enable-automation --enable-unsafe-swiftshader --headless --hide-scrollbars --mute-audio --blink-settings=primaryHoverType=2,availableHoverTypes=2,primaryPointerType=4,availablePointerTypes=4 --no-sandbox --user-data-dir=/var/folders/sp/clywph7j34l6psmb6hphsy5h0000gn/T/playwright_chromiumdev_profile-yE6OXT --remote-debugging-pipe --no-startup-window
  - <launched> pid=38233
  - [pid=38233][err] [0523/222637.529665:ERROR:base/power_monitor/thermal_state_observer_mac.mm:140] ThermalStateObserverMac unable to register to power notifications. Result: 9
  - [pid=38233][err] [0523/222637.531396:ERROR:net/dns/dns_config_service_posix.cc:142] DNS config watch failed to start.
  - [pid=38233][err] [0523/222637.532009:WARNING:net/dns/dns_config_service_posix.cc:201] Failed to read DnsConfig.
  - [pid=38233][err] [0523/222637.532010:FATAL:base/apple/mach_port_rendezvous_mac.cc:158] Check failed: kr == KERN_SUCCESS. bootstrap_check_in org.chromium.Chromium.MachPortRendezvousServer.38233: Permission denied (1100)
  - [pid=38233] <gracefully close start>
  - [pid=38233] <kill>
  - [pid=38233] <will force kill>
  - [pid=38233] exception while trying to kill process: Error: kill EPERM
  - [pid=38233] <process did exit: exitCode=null, signal=SIGTRAP>
  - [pid=38233] starting temporary directories cleanup
  - [pid=38233] finished temporary directories cleanup
  - [pid=38233] <gracefully close end>
.
- `deepal-s07`: 0 official downloads. Fallback reason: playwright failed: BrowserType.launch: Target page, context or browser has been closed
Browser logs:

<launching> /Users/linlin/Library/Caches/ms-playwright/chromium_headless_shell-1187/chrome-mac/headless_shell --disable-field-trial-config --disable-background-networking --disable-background-timer-throttling --disable-backgrounding-occluded-windows --disable-back-forward-cache --disable-breakpad --disable-client-side-phishing-detection --disable-component-extensions-with-background-pages --disable-component-update --no-default-browser-check --disable-default-apps --disable-dev-shm-usage --disable-extensions --disable-features=AcceptCHFrame,AvoidUnnecessaryBeforeUnloadCheckSync,DestroyProfileOnBrowserClose,DialMediaRouteProvider,GlobalMediaControls,HttpsUpgrades,LensOverlay,MediaRouter,PaintHolding,ThirdPartyStoragePartitioning,Translate,AutoDeElevate --allow-pre-commit-input --disable-hang-monitor --disable-ipc-flooding-protection --disable-popup-blocking --disable-prompt-on-repost --disable-renderer-backgrounding --force-color-profile=srgb --metrics-recording-only --no-first-run --password-store=basic --use-mock-keychain --no-service-autorun --export-tagged-pdf --disable-search-engine-choice-screen --unsafely-disable-devtools-self-xss-warnings --edge-skip-compat-layer-relaunch --enable-automation --enable-unsafe-swiftshader --headless --hide-scrollbars --mute-audio --blink-settings=primaryHoverType=2,availableHoverTypes=2,primaryPointerType=4,availablePointerTypes=4 --no-sandbox --user-data-dir=/var/folders/sp/clywph7j34l6psmb6hphsy5h0000gn/T/playwright_chromiumdev_profile-jfWVag --remote-debugging-pipe --no-startup-window
<launched> pid=38237
[pid=38237][err] [0523/222638.035423:ERROR:base/power_monitor/thermal_state_observer_mac.mm:140] ThermalStateObserverMac unable to register to power notifications. Result: 9
[pid=38237][err] [0523/222638.037311:ERROR:net/dns/dns_config_service_posix.cc:142] DNS config watch failed to start.
[pid=38237][err] [0523/222638.037783:FATAL:base/apple/mach_port_rendezvous_mac.cc:158] Check failed: kr == KERN_SUCCESS. bootstrap_check_in org.chromium.Chromium.MachPortRendezvousServer.38237: Permission denied (1100)
[pid=38237] <process did exit: exitCode=null, signal=SIGTRAP>
[pid=38237] starting temporary directories cleanup
Call log:
  - <launching> /Users/linlin/Library/Caches/ms-playwright/chromium_headless_shell-1187/chrome-mac/headless_shell --disable-field-trial-config --disable-background-networking --disable-background-timer-throttling --disable-backgrounding-occluded-windows --disable-back-forward-cache --disable-breakpad --disable-client-side-phishing-detection --disable-component-extensions-with-background-pages --disable-component-update --no-default-browser-check --disable-default-apps --disable-dev-shm-usage --disable-extensions --disable-features=AcceptCHFrame,AvoidUnnecessaryBeforeUnloadCheckSync,DestroyProfileOnBrowserClose,DialMediaRouteProvider,GlobalMediaControls,HttpsUpgrades,LensOverlay,MediaRouter,PaintHolding,ThirdPartyStoragePartitioning,Translate,AutoDeElevate --allow-pre-commit-input --disable-hang-monitor --disable-ipc-flooding-protection --disable-popup-blocking --disable-prompt-on-repost --disable-renderer-backgrounding --force-color-profile=srgb --metrics-recording-only --no-first-run --password-store=basic --use-mock-keychain --no-service-autorun --export-tagged-pdf --disable-search-engine-choice-screen --unsafely-disable-devtools-self-xss-warnings --edge-skip-compat-layer-relaunch --enable-automation --enable-unsafe-swiftshader --headless --hide-scrollbars --mute-audio --blink-settings=primaryHoverType=2,availableHoverTypes=2,primaryPointerType=4,availablePointerTypes=4 --no-sandbox --user-data-dir=/var/folders/sp/clywph7j34l6psmb6hphsy5h0000gn/T/playwright_chromiumdev_profile-jfWVag --remote-debugging-pipe --no-startup-window
  - <launched> pid=38237
  - [pid=38237][err] [0523/222638.035423:ERROR:base/power_monitor/thermal_state_observer_mac.mm:140] ThermalStateObserverMac unable to register to power notifications. Result: 9
  - [pid=38237][err] [0523/222638.037311:ERROR:net/dns/dns_config_service_posix.cc:142] DNS config watch failed to start.
  - [pid=38237][err] [0523/222638.037783:FATAL:base/apple/mach_port_rendezvous_mac.cc:158] Check failed: kr == KERN_SUCCESS. bootstrap_check_in org.chromium.Chromium.MachPortRendezvousServer.38237: Permission denied (1100)
  - [pid=38237] <process did exit: exitCode=null, signal=SIGTRAP>
  - [pid=38237] starting temporary directories cleanup
  - [pid=38237] <gracefully close start>
  - [pid=38237] <kill>
  - [pid=38237] <skipped force kill spawnedProcess.killed=false processClosed=true>
  - [pid=38237] finished temporary directories cleanup
  - [pid=38237] <gracefully close end>
.
- `deepal-s09`: 0 official downloads. Fallback reason: playwright failed: BrowserType.launch: Target page, context or browser has been closed
Browser logs:

<launching> /Users/linlin/Library/Caches/ms-playwright/chromium_headless_shell-1187/chrome-mac/headless_shell --disable-field-trial-config --disable-background-networking --disable-background-timer-throttling --disable-backgrounding-occluded-windows --disable-back-forward-cache --disable-breakpad --disable-client-side-phishing-detection --disable-component-extensions-with-background-pages --disable-component-update --no-default-browser-check --disable-default-apps --disable-dev-shm-usage --disable-extensions --disable-features=AcceptCHFrame,AvoidUnnecessaryBeforeUnloadCheckSync,DestroyProfileOnBrowserClose,DialMediaRouteProvider,GlobalMediaControls,HttpsUpgrades,LensOverlay,MediaRouter,PaintHolding,ThirdPartyStoragePartitioning,Translate,AutoDeElevate --allow-pre-commit-input --disable-hang-monitor --disable-ipc-flooding-protection --disable-popup-blocking --disable-prompt-on-repost --disable-renderer-backgrounding --force-color-profile=srgb --metrics-recording-only --no-first-run --password-store=basic --use-mock-keychain --no-service-autorun --export-tagged-pdf --disable-search-engine-choice-screen --unsafely-disable-devtools-self-xss-warnings --edge-skip-compat-layer-relaunch --enable-automation --enable-unsafe-swiftshader --headless --hide-scrollbars --mute-audio --blink-settings=primaryHoverType=2,availableHoverTypes=2,primaryPointerType=4,availablePointerTypes=4 --no-sandbox --user-data-dir=/var/folders/sp/clywph7j34l6psmb6hphsy5h0000gn/T/playwright_chromiumdev_profile-VwYFNX --remote-debugging-pipe --no-startup-window
<launched> pid=38239
[pid=38239][err] [0523/222638.733746:ERROR:base/power_monitor/thermal_state_observer_mac.mm:140] ThermalStateObserverMac unable to register to power notifications. Result: 9
[pid=38239][err] [0523/222638.740705:ERROR:net/dns/dns_config_service_posix.cc:142] DNS config watch failed to start.
[pid=38239][err] [0523/222638.741384:WARNING:net/dns/dns_config_service_posix.cc:201] Failed to read DnsConfig.
[pid=38239][err] [0523/222638.741532:FATAL:base/apple/mach_port_rendezvous_mac.cc:158] Check failed: kr == KERN_SUCCESS. bootstrap_check_in org.chromium.Chromium.MachPortRendezvousServer.38239: Permission denied (1100)
Call log:
  - <launching> /Users/linlin/Library/Caches/ms-playwright/chromium_headless_shell-1187/chrome-mac/headless_shell --disable-field-trial-config --disable-background-networking --disable-background-timer-throttling --disable-backgrounding-occluded-windows --disable-back-forward-cache --disable-breakpad --disable-client-side-phishing-detection --disable-component-extensions-with-background-pages --disable-component-update --no-default-browser-check --disable-default-apps --disable-dev-shm-usage --disable-extensions --disable-features=AcceptCHFrame,AvoidUnnecessaryBeforeUnloadCheckSync,DestroyProfileOnBrowserClose,DialMediaRouteProvider,GlobalMediaControls,HttpsUpgrades,LensOverlay,MediaRouter,PaintHolding,ThirdPartyStoragePartitioning,Translate,AutoDeElevate --allow-pre-commit-input --disable-hang-monitor --disable-ipc-flooding-protection --disable-popup-blocking --disable-prompt-on-repost --disable-renderer-backgrounding --force-color-profile=srgb --metrics-recording-only --no-first-run --password-store=basic --use-mock-keychain --no-service-autorun --export-tagged-pdf --disable-search-engine-choice-screen --unsafely-disable-devtools-self-xss-warnings --edge-skip-compat-layer-relaunch --enable-automation --enable-unsafe-swiftshader --headless --hide-scrollbars --mute-audio --blink-settings=primaryHoverType=2,availableHoverTypes=2,primaryPointerType=4,availablePointerTypes=4 --no-sandbox --user-data-dir=/var/folders/sp/clywph7j34l6psmb6hphsy5h0000gn/T/playwright_chromiumdev_profile-VwYFNX --remote-debugging-pipe --no-startup-window
  - <launched> pid=38239
  - [pid=38239][err] [0523/222638.733746:ERROR:base/power_monitor/thermal_state_observer_mac.mm:140] ThermalStateObserverMac unable to register to power notifications. Result: 9
  - [pid=38239][err] [0523/222638.740705:ERROR:net/dns/dns_config_service_posix.cc:142] DNS config watch failed to start.
  - [pid=38239][err] [0523/222638.741384:WARNING:net/dns/dns_config_service_posix.cc:201] Failed to read DnsConfig.
  - [pid=38239][err] [0523/222638.741532:FATAL:base/apple/mach_port_rendezvous_mac.cc:158] Check failed: kr == KERN_SUCCESS. bootstrap_check_in org.chromium.Chromium.MachPortRendezvousServer.38239: Permission denied (1100)
  - [pid=38239] <gracefully close start>
  - [pid=38239] <kill>
  - [pid=38239] <will force kill>
  - [pid=38239] exception while trying to kill process: Error: kill EPERM
  - [pid=38239] <process did exit: exitCode=null, signal=SIGTRAP>
  - [pid=38239] starting temporary directories cleanup
  - [pid=38239] finished temporary directories cleanup
  - [pid=38239] <gracefully close end>
.

Note: `imagehash` could not be installed in the sandbox because outbound pip networking is blocked; this report uses a local standard pHash implementation (32x32 grayscale DCT, top-left 8x8, Hamming distance).

## AI Fallback Disclosure

The five target models use local AI-fallback source images only because Playwright/curl official-site download attempts in this Codex sandbox cannot resolve external hosts after the configured local proxy failed. No fallback image is represented as an official photo.

| Slug | Category | # | Original | Laundered | pHash Distance | Status |
|---|---:|---:|---|---|---:|---|
| changan-uni-t | hero | 1 | hero-01.jpg | evautopro-changan-uni-t-01.webp | 32 | ✅ |
| changan-uni-t | hero | 2 | hero-02.jpg | evautopro-changan-uni-t-02.webp | 28 | ✅ |
| changan-uni-t | appearance | 1 | appearance-01.jpg | evautopro-changan-uni-t-appearance-01.webp | 18 | ✅ |
| changan-uni-t | appearance | 2 | appearance-02.jpg | evautopro-changan-uni-t-appearance-02.webp | 32 | ✅ |
| changan-uni-t | appearance | 3 | appearance-03.jpg | evautopro-changan-uni-t-appearance-03.webp | 16 | ✅ |
| changan-uni-t | appearance | 4 | appearance-04.jpg | evautopro-changan-uni-t-appearance-04.webp | 32 | ✅ |
| changan-uni-t | appearance | 5 | appearance-05.jpg | evautopro-changan-uni-t-appearance-05.webp | 26 | ✅ |
| changan-uni-t | console | 1 | console-01.jpg | evautopro-changan-uni-t-console-01.webp | 26 | ✅ |
| changan-uni-t | console | 2 | console-02.jpg | evautopro-changan-uni-t-console-02.webp | 24 | ✅ |
| changan-uni-t | console | 3 | console-03.jpg | evautopro-changan-uni-t-console-03.webp | 18 | ✅ |
| changan-uni-t | space | 1 | space-01.jpg | evautopro-changan-uni-t-space-01.webp | 32 | ✅ |
| changan-uni-t | space | 2 | space-02.jpg | evautopro-changan-uni-t-space-02.webp | 30 | ✅ |
| changan-uni-t | space | 3 | space-03.jpg | evautopro-changan-uni-t-space-03.webp | 26 | ✅ |
| changan-uni-t | other | 1 | other-01.jpg | evautopro-changan-uni-t-other-01.webp | 24 | ✅ |
| changan-uni-t | other | 2 | other-02.jpg | evautopro-changan-uni-t-other-02.webp | 20 | ✅ |
| changan-uni-t | other | 3 | other-03.jpg | evautopro-changan-uni-t-other-03.webp | 28 | ✅ |
| changan-cs55-plus | hero | 1 | hero-01.jpg | evautopro-changan-cs55-plus-01.webp | 24 | ✅ |
| changan-cs55-plus | hero | 2 | hero-02.jpg | evautopro-changan-cs55-plus-02.webp | 30 | ✅ |
| changan-cs55-plus | appearance | 1 | appearance-01.jpg | evautopro-changan-cs55-plus-appearance-01.webp | 24 | ✅ |
| changan-cs55-plus | appearance | 2 | appearance-02.jpg | evautopro-changan-cs55-plus-appearance-02.webp | 34 | ✅ |
| changan-cs55-plus | appearance | 3 | appearance-03.jpg | evautopro-changan-cs55-plus-appearance-03.webp | 20 | ✅ |
| changan-cs55-plus | appearance | 4 | appearance-04.jpg | evautopro-changan-cs55-plus-appearance-04.webp | 30 | ✅ |
| changan-cs55-plus | appearance | 5 | appearance-05.jpg | evautopro-changan-cs55-plus-appearance-05.webp | 26 | ✅ |
| changan-cs55-plus | console | 1 | console-01.jpg | evautopro-changan-cs55-plus-console-01.webp | 38 | ✅ |
| changan-cs55-plus | console | 2 | console-02.jpg | evautopro-changan-cs55-plus-console-02.webp | 28 | ✅ |
| changan-cs55-plus | console | 3 | console-03.jpg | evautopro-changan-cs55-plus-console-03.webp | 32 | ✅ |
| changan-cs55-plus | space | 1 | space-01.jpg | evautopro-changan-cs55-plus-space-01.webp | 30 | ✅ |
| changan-cs55-plus | space | 2 | space-02.jpg | evautopro-changan-cs55-plus-space-02.webp | 30 | ✅ |
| changan-cs55-plus | space | 3 | space-03.jpg | evautopro-changan-cs55-plus-space-03.webp | 30 | ✅ |
| changan-cs55-plus | other | 1 | other-01.jpg | evautopro-changan-cs55-plus-other-01.webp | 20 | ✅ |
| changan-cs55-plus | other | 2 | other-02.jpg | evautopro-changan-cs55-plus-other-02.webp | 20 | ✅ |
| changan-cs55-plus | other | 3 | other-03.jpg | evautopro-changan-cs55-plus-other-03.webp | 30 | ✅ |
| deepal-s05 | hero | 1 | hero-01.jpg | evautopro-deepal-s05-01.webp | 34 | ✅ |
| deepal-s05 | hero | 2 | hero-02.jpg | evautopro-deepal-s05-02.webp | 20 | ✅ |
| deepal-s05 | appearance | 1 | appearance-01.jpg | evautopro-deepal-s05-appearance-01.webp | 14 | ✅ |
| deepal-s05 | appearance | 2 | appearance-02.jpg | evautopro-deepal-s05-appearance-02.webp | 26 | ✅ |
| deepal-s05 | appearance | 3 | appearance-03.jpg | evautopro-deepal-s05-appearance-03.webp | 18 | ✅ |
| deepal-s05 | appearance | 4 | appearance-04.jpg | evautopro-deepal-s05-appearance-04.webp | 20 | ✅ |
| deepal-s05 | appearance | 5 | appearance-05.jpg | evautopro-deepal-s05-appearance-05.webp | 18 | ✅ |
| deepal-s05 | console | 1 | console-01.jpg | evautopro-deepal-s05-console-01.webp | 32 | ✅ |
| deepal-s05 | console | 2 | console-02.jpg | evautopro-deepal-s05-console-02.webp | 22 | ✅ |
| deepal-s05 | console | 3 | console-03.jpg | evautopro-deepal-s05-console-03.webp | 18 | ✅ |
| deepal-s05 | space | 1 | space-01.jpg | evautopro-deepal-s05-space-01.webp | 36 | ✅ |
| deepal-s05 | space | 2 | space-02.jpg | evautopro-deepal-s05-space-02.webp | 32 | ✅ |
| deepal-s05 | space | 3 | space-03.jpg | evautopro-deepal-s05-space-03.webp | 26 | ✅ |
| deepal-s05 | other | 1 | other-01.jpg | evautopro-deepal-s05-other-01.webp | 20 | ✅ |
| deepal-s05 | other | 2 | other-02.jpg | evautopro-deepal-s05-other-02.webp | 14 | ✅ |
| deepal-s05 | other | 3 | other-03.jpg | evautopro-deepal-s05-other-03.webp | 22 | ✅ |
| deepal-s07 | hero | 1 | hero-01.jpg | evautopro-deepal-s07-01.webp | 32 | ✅ |
| deepal-s07 | hero | 2 | hero-02.jpg | evautopro-deepal-s07-02.webp | 22 | ✅ |
| deepal-s07 | appearance | 1 | appearance-01.jpg | evautopro-deepal-s07-appearance-01.webp | 36 | ✅ |
| deepal-s07 | appearance | 2 | appearance-02.jpg | evautopro-deepal-s07-appearance-02.webp | 20 | ✅ |
| deepal-s07 | appearance | 3 | appearance-03.jpg | evautopro-deepal-s07-appearance-03.webp | 14 | ✅ |
| deepal-s07 | appearance | 4 | appearance-04.jpg | evautopro-deepal-s07-appearance-04.webp | 28 | ✅ |
| deepal-s07 | appearance | 5 | appearance-05.jpg | evautopro-deepal-s07-appearance-05.webp | 16 | ✅ |
| deepal-s07 | console | 1 | console-01.jpg | evautopro-deepal-s07-console-01.webp | 30 | ✅ |
| deepal-s07 | console | 2 | console-02.jpg | evautopro-deepal-s07-console-02.webp | 26 | ✅ |
| deepal-s07 | console | 3 | console-03.jpg | evautopro-deepal-s07-console-03.webp | 22 | ✅ |
| deepal-s07 | space | 1 | space-01.jpg | evautopro-deepal-s07-space-01.webp | 28 | ✅ |
| deepal-s07 | space | 2 | space-02.jpg | evautopro-deepal-s07-space-02.webp | 36 | ✅ |
| deepal-s07 | space | 3 | space-03.jpg | evautopro-deepal-s07-space-03.webp | 32 | ✅ |
| deepal-s07 | other | 1 | other-01.jpg | evautopro-deepal-s07-other-01.webp | 18 | ✅ |
| deepal-s07 | other | 2 | other-02.jpg | evautopro-deepal-s07-other-02.webp | 16 | ✅ |
| deepal-s07 | other | 3 | other-03.jpg | evautopro-deepal-s07-other-03.webp | 34 | ✅ |
| deepal-s09 | hero | 1 | hero-01.jpg | evautopro-deepal-s09-01.webp | 20 | ✅ |
| deepal-s09 | hero | 2 | hero-02.jpg | evautopro-deepal-s09-02.webp | 28 | ✅ |
| deepal-s09 | appearance | 1 | appearance-01.jpg | evautopro-deepal-s09-appearance-01.webp | 24 | ✅ |
| deepal-s09 | appearance | 2 | appearance-02.jpg | evautopro-deepal-s09-appearance-02.webp | 36 | ✅ |
| deepal-s09 | appearance | 3 | appearance-03.jpg | evautopro-deepal-s09-appearance-03.webp | 20 | ✅ |
| deepal-s09 | appearance | 4 | appearance-04.jpg | evautopro-deepal-s09-appearance-04.webp | 34 | ✅ |
| deepal-s09 | appearance | 5 | appearance-05.jpg | evautopro-deepal-s09-appearance-05.webp | 26 | ✅ |
| deepal-s09 | console | 1 | console-01.jpg | evautopro-deepal-s09-console-01.webp | 32 | ✅ |
| deepal-s09 | console | 2 | console-02.jpg | evautopro-deepal-s09-console-02.webp | 32 | ✅ |
| deepal-s09 | console | 3 | console-03.jpg | evautopro-deepal-s09-console-03.webp | 32 | ✅ |
| deepal-s09 | space | 1 | space-01.jpg | evautopro-deepal-s09-space-01.webp | 26 | ✅ |
| deepal-s09 | space | 2 | space-02.jpg | evautopro-deepal-s09-space-02.webp | 30 | ✅ |
| deepal-s09 | space | 3 | space-03.jpg | evautopro-deepal-s09-space-03.webp | 26 | ✅ |
| deepal-s09 | other | 1 | other-01.jpg | evautopro-deepal-s09-other-01.webp | 24 | ✅ |
| deepal-s09 | other | 2 | other-02.jpg | evautopro-deepal-s09-other-02.webp | 28 | ✅ |
| deepal-s09 | other | 3 | other-03.jpg | evautopro-deepal-s09-other-03.webp | 20 | ✅ |

## Result

✅ All checked files meet pHash distance >= 10.
