import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  TradeCanceled,
  TradeConfirmed,
  TradeCreated,
  TradeExpired,
  TradeWithdrawn
} from "../generated/TrustMe/TrustMe"

export function createTradeCanceledEvent(
  tradeID: BigInt,
  seller: Address,
  buyer: Address
): TradeCanceled {
  let tradeCanceledEvent = changetype<TradeCanceled>(newMockEvent())

  tradeCanceledEvent.parameters = new Array()

  tradeCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "tradeID",
      ethereum.Value.fromUnsignedBigInt(tradeID)
    )
  )
  tradeCanceledEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  tradeCanceledEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )

  return tradeCanceledEvent
}

export function createTradeConfirmedEvent(
  tradeID: BigInt,
  seller: Address,
  buyer: Address
): TradeConfirmed {
  let tradeConfirmedEvent = changetype<TradeConfirmed>(newMockEvent())

  tradeConfirmedEvent.parameters = new Array()

  tradeConfirmedEvent.parameters.push(
    new ethereum.EventParam(
      "tradeID",
      ethereum.Value.fromUnsignedBigInt(tradeID)
    )
  )
  tradeConfirmedEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  tradeConfirmedEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )

  return tradeConfirmedEvent
}

export function createTradeCreatedEvent(
  tradeID: BigInt,
  seller: Address,
  buyer: Address
): TradeCreated {
  let tradeCreatedEvent = changetype<TradeCreated>(newMockEvent())

  tradeCreatedEvent.parameters = new Array()

  tradeCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "tradeID",
      ethereum.Value.fromUnsignedBigInt(tradeID)
    )
  )
  tradeCreatedEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  tradeCreatedEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )

  return tradeCreatedEvent
}

export function createTradeExpiredEvent(
  tradeID: BigInt,
  seller: Address,
  buyer: Address
): TradeExpired {
  let tradeExpiredEvent = changetype<TradeExpired>(newMockEvent())

  tradeExpiredEvent.parameters = new Array()

  tradeExpiredEvent.parameters.push(
    new ethereum.EventParam(
      "tradeID",
      ethereum.Value.fromUnsignedBigInt(tradeID)
    )
  )
  tradeExpiredEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  tradeExpiredEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )

  return tradeExpiredEvent
}

export function createTradeWithdrawnEvent(
  tradeID: BigInt,
  seller: Address,
  buyer: Address
): TradeWithdrawn {
  let tradeWithdrawnEvent = changetype<TradeWithdrawn>(newMockEvent())

  tradeWithdrawnEvent.parameters = new Array()

  tradeWithdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "tradeID",
      ethereum.Value.fromUnsignedBigInt(tradeID)
    )
  )
  tradeWithdrawnEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  tradeWithdrawnEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )

  return tradeWithdrawnEvent
}
