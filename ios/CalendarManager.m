//
//  CalendarManager.m
//  SDK_ITAU
//
//  Created by Juan Camilo Moreno Ruiz on 5/16/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

//#import <Foundation/Foundation.h>
//#import "CalendarManager.h"
//#import <React/RCTLog.h>
//#import <React/RCTBridgeModule.h>
#import "SDK_ITAU-Bridging-Header.h"

@interface RCT_EXTERN_MODULE(CalendarManager, NSObject)
RCT_EXPORT_METHOD(requestData:(NSString *)name);

//RCT_EXPORT_METHOD(requestData:(NSString *)name :(RCTResponseSenderBlock)callback);

/*
NSString *data = @"";

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(getData:(RCTResponseSenderBlock)callback)
{
  //NSString *data = @"Dato respuesta 2";
  callback(@[[NSNull null], data]);
}

RCT_EXPORT_METHOD(setData:(NSString *)name)
{
  data = name;
  RCTLogInfo(@"Param: %@", name);
}

RCT_EXPORT_METHOD(requestData:(NSString *)name :(RCTResponseSenderBlock)callback)
{
  NSString *varyingString1 = @" - Success";
  NSString *str = [NSString stringWithFormat: @"%@ %@", name, varyingString1];
  
  callback(@[[NSNull null], str]);
}
*/


@end
