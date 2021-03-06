/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
export declare const HTTP_HEADERS_SEALED_ERR = "Headers have been sealed and cannot be mutated.";
/**
 * Polyfill for [Headers](https://developer.mozilla.org/en-US/docs/Web/API/Headers/Headers), as
 * specified in the [Fetch Spec](https://fetch.spec.whatwg.org/#headers-class).
 *
 * The only known difference between this `Headers` implementation and the spec is the
 * lack of an `entries` method.
 *
 * ### Example
 *
 * ```
 * import {Headers} from '@angular/http';
 *
 * var firstHeaders = new Headers();
 * firstHeaders.append('Content-Type', 'image/jpeg');
 * console.log(firstHeaders.get('Content-Type')) //'image/jpeg'
 *
 * // Create headers from Plain Old JavaScript Object
 * var secondHeaders = new Headers({
 *   'X-My-Custom-Header': 'Angular'
 * });
 * console.log(secondHeaders.get('X-My-Custom-Header')); //'Angular'
 *
 * var thirdHeaders = new Headers(secondHeaders);
 * console.log(thirdHeaders.get('X-My-Custom-Header')); //'Angular'
 * ```
 *
 * @experimental
 */
export declare class HttpHeaders {
    private _lazyInit;
    constructor(headers?: HttpHeaders | {
        [name: string]: any;
    } | null);
    /**
     * Returns a new Headers instance from the given DOMString of Response Headers
     */
    static fromResponseHeaderString(headersString: string): HttpHeaders;
    /**
     * Appends a header to existing list of header values for a given header name.
     */
    append(name: string, value: string): void;
    /**
     * Deletes all header values for the given name.
     */
    delete(name: string): void;
    forEach(fn: (values: string[], name: string, headers: Map<string, string[]>) => void): void;
    /**
     * Returns first header that matches given name.
     */
    get(name: string): string | null;
    /**
     * Checks for existence of header by given name.
     */
    has(name: string): boolean;
    /**
     * Returns the names of the headers
     */
    keys(): string[];
    /**
     * Sets or overrides header value for given name.
     */
    set(name: string, value: string | string[]): void;
    /**
     * Returns values of all headers.
     */
    values(): string[][];
    /**
     * Returns string of all headers.
     */
    toJSON(): {
        [name: string]: any;
    };
    /**
     * Returns list of header values for a given name.
     */
    getAll(name: string): string[] | null;
    /**
     * This method is not implemented.
     */
    entries(): void;
    clone(): HttpHeaders;
    private mayBeSetNormalizedName(name);
    private ensureInitialized();
}
