import {
    TradeCanceled as TradeCanceledEvent,
    TradeConfirmed as TradeConfirmedEvent,
    TradeCreated as TradeCreatedEvent,
    TradeExpired as TradeExpiredEvent,
    TradeWithdrawn as TradeWithdrawnEvent,
} from "../generated/TrustMe/TrustMe";
import {
    AllTrade,
    TradeCanceled,
    TradeConfirmed,
    TradeCreated,
    TradeExpired,
    TradeWithdrawn,
} from "../generated/schema";

export function handleTradeCreated(event: TradeCreatedEvent): void {
    let entity = new TradeCreated(event.params.tradeID.toString());
    let AllTradeEntity = new AllTrade(event.params.tradeID.toString());
    // update active trades

    AllTradeEntity.tradeID = event.params.tradeID;
    AllTradeEntity.seller = event.params.seller;
    AllTradeEntity.buyer = event.params.buyer;
    AllTradeEntity.tokenToSell = event.params.tokenToSell;
    AllTradeEntity.tokenToBuy = event.params.tokenToBuy;
    AllTradeEntity.tokenAmtToSell = event.params.tokenAmtToSell;
    AllTradeEntity.tokenAmtToBuy = event.params.tokenAmtToBuy;
    AllTradeEntity.deadline = event.params.deadline;
    AllTradeEntity.status = "Pending";
    // GET MORE DATA FROM EVENT

    // update trade created
    entity.tradeID = event.params.tradeID;
    entity.seller = event.params.seller;
    entity.buyer = event.params.buyer;
    entity.tokenToSell = event.params.tokenToSell;
    entity.tokenToBuy = event.params.tokenToBuy;
    entity.tokenAmtToSell = event.params.tokenAmtToSell;
    entity.tokenAmtToBuy = event.params.tokenAmtToBuy;
    entity.deadline = event.params.deadline;

    AllTradeEntity.save();
    entity.save();
}
export function handleTradeCanceled(event: TradeCanceledEvent): void {
    let entity = TradeCanceled.load(event.params.tradeID.toString());
    let AllTradeEntity = AllTrade.load(event.params.tradeID.toString());
    if (!entity) {
        entity = new TradeCanceled(event.params.tradeID.toString());
    }
    if (!AllTradeEntity) {
        AllTradeEntity = new AllTrade(event.params.tradeID.toString());
    }

    entity.tradeID = event.params.tradeID;
    entity.seller = event.params.seller;
    entity.buyer = event.params.buyer;

    AllTradeEntity.status = "Canceled";
    entity.save();
    AllTradeEntity.save();
}

export function handleTradeConfirmed(event: TradeConfirmedEvent): void {
    let entity = TradeConfirmed.load(event.params.tradeID.toString());
    let AllTradeEntity = AllTrade.load(event.params.tradeID.toString());
    if (!entity) {
        entity = new TradeConfirmed(event.params.tradeID.toString());
    }
    if (!AllTradeEntity) {
        AllTradeEntity = new AllTrade(event.params.tradeID.toString());
    }
    // update allTrades
    AllTradeEntity.status = "Confirmed";

    entity.tradeID = event.params.tradeID;
    entity.seller = event.params.seller;
    entity.buyer = event.params.buyer;

    AllTradeEntity.save();
    entity.save();
}

export function handleTradeExpired(event: TradeExpiredEvent): void {
    let entity = TradeExpired.load(event.params.tradeID.toString());
    let AllTradeEntity = AllTrade.load(event.params.tradeID.toString());
    if (!entity) {
        entity = new TradeExpired(event.params.tradeID.toString());
    }
    if (!AllTradeEntity) {
        AllTradeEntity = new AllTrade(event.params.tradeID.toString());
    }
    AllTradeEntity.status = "Expired";
    entity.tradeID = event.params.tradeID;
    entity.seller = event.params.seller;
    entity.buyer = event.params.buyer;

    AllTradeEntity.save();
    entity.save();
}

export function handleTradeWithdrawn(event: TradeWithdrawnEvent): void {
    let entity = TradeWithdrawn.load(event.params.tradeID.toString());
    let AllTradeEntity = AllTrade.load(event.params.tradeID.toString());

    if (!entity) {
        entity = new TradeWithdrawn(event.params.tradeID.toString());
    }
    if (!AllTradeEntity) {
        AllTradeEntity = new AllTrade(event.params.tradeID.toString());
    }

    AllTradeEntity.status = "Withdrawn";
    entity.tradeID = event.params.tradeID;
    entity.seller = event.params.seller;
    entity.buyer = event.params.buyer;
    entity.status = "Withdrawn";

    AllTradeEntity.save();
    entity.save();
}
