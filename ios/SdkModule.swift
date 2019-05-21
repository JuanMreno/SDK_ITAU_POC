//
//  SdkModule.swift
//  SDK_ITAU
//
//  Created by Juan Camilo Moreno Ruiz on 5/21/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

import Foundation

@objc(SdkModule)
class SdkModule: NSObject {
  @objc func doThis() -> Void {
    // w00t
  }
  
  @objc func getData(_ dataParams: String, callback: @escaping RCTResponseSenderBlock) -> Void {
    callback([NSNull(), "Data sended: " + dataParams])
  }
  
//  @objc func takeMepromise(_ dataParams: String, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) -> Void {
//    resolve("This is your promise");
//  }
  
}
