//
//  CalendarManager.m
//  SDK_ITAU
//
//  Created by Juan Camilo Moreno Ruiz on 5/17/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "CalendarManager.h"
#import <React/RCTLog.h>

@implementation CalendarManager

NSString *data = @"";

// To export a module named CalendarManager
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

@end
