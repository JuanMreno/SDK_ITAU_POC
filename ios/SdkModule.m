//
//  SdkModule.m
//  SDK_ITAU
//
//  Created by Juan Camilo Moreno Ruiz on 5/21/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "SDK_ITAU-Bridging-Header.h"


@interface RCT_EXTERN_MODULE(SdkModule, NSObject)
RCT_EXTERN_METHOD(doThis)

RCT_EXTERN_METHOD(getData: (NSString*)dataParams callback: (RCTResponseSenderBlock))

//RCT_REMAP_METHOD(takeMepromise,
//                 findEventsWithResolver:(RCTPromiseResolveBlock)resolve
//                 rejecter:(RCTPromiseRejectBlock)reject)

@end
