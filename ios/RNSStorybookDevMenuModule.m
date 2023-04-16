#import "RNSStorybookDevMenuModule.h"

#if __has_include(<React/RCTDevMenu.h>)
#import <React/RCTDevMenu.h>
#endif

#import <React/RCTReloadCommand.h>

static BOOL IsStorybookEnabled = NO;

BOOL RNSStorybookDevMenuIsStorybookEnabled(void) {
  return IsStorybookEnabled;
}

@implementation RNSStorybookDevMenuModule {
#if __has_include(<React/RCTDevMenu.h>)
  RCTDevMenuItem *_devMenuItem;
#endif
}

@synthesize bridge = _bridge;

RCT_EXPORT_MODULE();

+ (BOOL)requiresMainQueueSetup {
  return YES;
}

- (dispatch_queue_t)methodQueue {
  return dispatch_get_main_queue();
}

#if __has_include(<React/RCTDevMenu.h>)
- (RCTDevMenuItem *)devMenuItem {
  if (!_devMenuItem) {
    _devMenuItem = [RCTDevMenuItem buttonItemWithTitleBlock:^NSString *{
      return @"Toggle Storybook";
    } handler:^{
      IsStorybookEnabled = !IsStorybookEnabled;
      RCTTriggerReloadCommandListeners(@"Toggle Storybook");
    }];
  }
  return _devMenuItem;
}
#endif

- (void)setBridge:(RCTBridge *)bridge {
    _bridge = bridge;
#if __has_include(<React/RCTDevMenu.h>)
    [_bridge.devMenu addItem:self.devMenuItem];
#endif
}

@end
