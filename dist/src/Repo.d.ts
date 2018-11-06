/// <reference types="node" />
export declare const EXT = "hypermerge";
declare type FeedFn = (f: Feed<Uint8Array>) => void;
interface Swarm {
    join(dk: Buffer): void;
    leave(dk: Buffer): void;
    on: Function;
}
import Queue from "./Queue";
import { Feed, Peer } from "./hypercore";
import { Change } from "automerge/backend";
import { BackendManager } from "./backend";
import { Document } from "./Document";
export interface Keys {
    publicKey: Buffer;
    secretKey?: Buffer;
}
export interface FeedData {
    actorId: string;
    writable: Boolean;
    changes: Change[];
}
export interface Options {
    path?: string;
    storage?: Function;
}
export interface LedgerData {
    docId: string;
    actorIds: string[];
}
export declare class Repo {
    path?: string;
    storage: Function;
    ready: Promise<undefined>;
    joined: Set<Buffer>;
    feeds: Map<string, Feed<Uint8Array>>;
    feedQs: Map<string, Queue<FeedFn>>;
    feedPeers: Map<string, Set<Peer>>;
    docs: Map<string, BackendManager>;
    feedSeq: Map<string, number>;
    ledger: Feed<LedgerData>;
    private ledgerMetadata;
    private docMetadata;
    swarm?: Swarm;
    id: Buffer;
    constructor(opts?: Options);
    createDocument<T>(keys?: Keys): Document<T>;
    createDocumentBackend(keys: Keys): BackendManager;
    private addMetadata;
    openDocument(docId: string): BackendManager;
    openDocumentFrontend<T>(docId: string): Document<T>;
    joinSwarm(swarm: Swarm): void;
    private feedData;
    private allFeedData;
    writeChange(doc: BackendManager, actorId: string, change: Change): void;
    private loadDocument;
    private join;
    private leave;
    private getFeed;
    private storageFn;
    initActorFeed(doc: BackendManager): string;
    sendToPeer(peer: Peer, data: any): void;
    actorIds(doc: BackendManager): string[];
    feed(actorId: string): Feed<Uint8Array>;
    peers(doc: BackendManager): Peer[];
    private closeFeed;
    private initFeed;
    stream: (opts: any) => any;
    releaseManager(doc: BackendManager): void;
}
export {};
