/// <reference types="node" />
import { Options, RepoBackend } from "./RepoBackend";
import { RepoFrontend } from "./RepoFrontend";
import Handle from "./Handle";
import { Clock } from "./Clock";
interface Swarm {
    join(dk: Buffer): void;
    leave(dk: Buffer): void;
    on: Function;
}
export declare class Repo {
    front: RepoFrontend;
    back: RepoBackend;
    id: Buffer;
    stream: (opts: any) => any;
    create: (init?: any) => string;
    open: <T>(id: string) => Handle<T>;
    follow: (id: string, target: string) => void;
    replicate: (swarm: Swarm) => void;
    fork: (id: string) => string;
    watch: <T>(id: string, cb: (val: T, clock?: Clock, index?: number) => void) => Handle<T>;
    doc: <T>(id: string, cb?: (val: T, clock?: Clock) => void) => Promise<T>;
    merge: (id: string, target: string) => void;
    constructor(opts: Options);
}
export {};
