#ifndef RNSStorybookDevMenuModule_h
#define RNSStorybookDevMenuModule_h

#import <React/RCTBridgeModule.h>

RCT_EXTERN BOOL RNSStorybookDevMenuIsStorybookEnabled(void);

@interface RNSStorybookDevMenuModule : NSObject <RCTBridgeModule>

@end

#endif /* RNSStorybookDevMenuModule_h */
