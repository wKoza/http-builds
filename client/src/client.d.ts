import { Observable } from 'rxjs/Observable';
import { HttpHandler } from './backend';
import * as types from './client_types';
import { HttpMethod, HttpRequest } from './request';
import { HttpEvent, HttpResponse } from './response';
export declare class HttpClient {
    private handler;
    constructor(handler: HttpHandler);
    request<R>(req: HttpRequest<any>): Observable<HttpEvent<R>>;
    request(url: string, method: HttpMethod | string, options: types.zHttpRequestOptionsObserveArrayBufferBody<any>): Observable<ArrayBuffer>;
    request(url: string, method: HttpMethod | string, options: types.zHttpRequestOptionsObserveBlobBody<any>): Observable<Blob>;
    request(url: string, method: HttpMethod | string, options: types.zHttpRequestOptionsObserveTextBody<any>): Observable<string>;
    request(url: string, method: HttpMethod | string, options: types.zHttpRequestOptionsObserveArrayBufferEvents<any>): Observable<HttpEvent<ArrayBuffer>>;
    request(url: string, method: HttpMethod | string, options: types.zHttpRequestOptionsObserveBlobEvents<any>): Observable<HttpEvent<Blob>>;
    request(url: string, method: HttpMethod | string, options: types.zHttpRequestOptionsObserveTextEvents<any>): Observable<HttpEvent<string>>;
    request<R>(url: string, method: HttpMethod | string, options: types.zHttpRequestOptionsObserveEvents<any>): Observable<HttpEvent<R>>;
    request(url: string, method: HttpMethod | string, options: types.zHttpRequestOptionsObserveArrayBufferResponse<any>): Observable<HttpResponse<ArrayBuffer>>;
    request(url: string, method: HttpMethod | string, options: types.zHttpRequestOptionsObserveBlobResponse<any>): Observable<HttpResponse<Blob>>;
    request(url: string, method: HttpMethod | string, options: types.zHttpRequestOptionsObserveTextResponse<any>): Observable<HttpResponse<string>>;
    request<R>(url: string, method: HttpMethod | string, options: types.zHttpRequestOptionsObserveResponse<any>): Observable<HttpResponse<R>>;
    request(url: string, method: HttpMethod | string, options?: types.HttpRequestOptions<any>): Observable<Object>;
    request<R>(url: string, method: HttpMethod | string, options?: types.HttpRequestOptions<any>): Observable<R>;
    delete(url: string, options: types.zHttpMethodOptionsObserveArrayBufferBody): Observable<ArrayBuffer>;
    delete(url: string, options: types.zHttpMethodOptionsObserveBlobBody): Observable<Blob>;
    delete(url: string, options: types.zHttpMethodOptionsObserveTextBody): Observable<string>;
    delete(url: string, options: types.zHttpMethodOptionsObserveArrayBufferEvents): Observable<HttpEvent<ArrayBuffer>>;
    delete(url: string, options: types.zHttpMethodOptionsObserveBlobEvents): Observable<HttpEvent<Blob>>;
    delete(url: string, options: types.zHttpMethodOptionsObserveTextEvents): Observable<HttpEvent<string>>;
    delete(url: string, options: types.zHttpMethodOptionsObserveEvents): Observable<HttpEvent<Object>>;
    delete<T>(url: string, options: types.zHttpMethodOptionsObserveEvents): Observable<HttpEvent<T>>;
    delete(url: string, options: types.zHttpMethodOptionsObserveArrayBufferResponse): Observable<HttpResponse<ArrayBuffer>>;
    delete(url: string, options: types.zHttpMethodOptionsObserveBlobResponse): Observable<HttpResponse<Blob>>;
    delete(url: string, options: types.zHttpMethodOptionsObserveTextResponse): Observable<HttpResponse<string>>;
    delete(url: string, options: types.zHttpMethodOptionsObserveResponse): Observable<HttpResponse<Object>>;
    delete<T>(url: string, options: types.zHttpMethodOptionsObserveResponse): Observable<HttpResponse<T>>;
    delete(url: string, options?: types.HttpMethodOptions): Observable<Object>;
    delete<T>(url: string, options?: types.HttpMethodOptions): Observable<T>;
    get(url: string, options: types.zHttpMethodOptionsObserveArrayBufferBody): Observable<ArrayBuffer>;
    get(url: string, options: types.zHttpMethodOptionsObserveBlobBody): Observable<Blob>;
    get(url: string, options: types.zHttpMethodOptionsObserveTextBody): Observable<string>;
    get(url: string, options: types.zHttpMethodOptionsObserveArrayBufferEvents): Observable<HttpEvent<ArrayBuffer>>;
    get(url: string, options: types.zHttpMethodOptionsObserveBlobEvents): Observable<HttpEvent<Blob>>;
    get(url: string, options: types.zHttpMethodOptionsObserveTextEvents): Observable<HttpEvent<string>>;
    get(url: string, options: types.zHttpMethodOptionsObserveEvents): Observable<HttpEvent<Object>>;
    get<T>(url: string, options: types.zHttpMethodOptionsObserveEvents): Observable<HttpEvent<T>>;
    get(url: string, options: types.zHttpMethodOptionsObserveArrayBufferResponse): Observable<HttpResponse<ArrayBuffer>>;
    get(url: string, options: types.zHttpMethodOptionsObserveBlobResponse): Observable<HttpResponse<Blob>>;
    get(url: string, options: types.zHttpMethodOptionsObserveTextResponse): Observable<HttpResponse<string>>;
    get(url: string, options: types.zHttpMethodOptionsObserveResponse): Observable<HttpResponse<Object>>;
    get<T>(url: string, options: types.zHttpMethodOptionsObserveResponse): Observable<HttpResponse<T>>;
    get(url: string, options?: types.HttpMethodOptions): Observable<Object>;
    get<T>(url: string, options?: types.HttpMethodOptions): Observable<T>;
    head(url: string, options: types.zHttpMethodOptionsObserveArrayBufferBody): Observable<ArrayBuffer>;
    head(url: string, options: types.zHttpMethodOptionsObserveBlobBody): Observable<Blob>;
    head(url: string, options: types.zHttpMethodOptionsObserveTextBody): Observable<string>;
    head(url: string, options: types.zHttpMethodOptionsObserveArrayBufferEvents): Observable<HttpEvent<ArrayBuffer>>;
    head(url: string, options: types.zHttpMethodOptionsObserveBlobEvents): Observable<HttpEvent<Blob>>;
    head(url: string, options: types.zHttpMethodOptionsObserveTextEvents): Observable<HttpEvent<string>>;
    head(url: string, options: types.zHttpMethodOptionsObserveEvents): Observable<HttpEvent<Object>>;
    head<T>(url: string, options: types.zHttpMethodOptionsObserveEvents): Observable<HttpEvent<T>>;
    head(url: string, options: types.zHttpMethodOptionsObserveArrayBufferResponse): Observable<HttpResponse<ArrayBuffer>>;
    head(url: string, options: types.zHttpMethodOptionsObserveBlobResponse): Observable<HttpResponse<Blob>>;
    head(url: string, options: types.zHttpMethodOptionsObserveTextResponse): Observable<HttpResponse<string>>;
    head(url: string, options: types.zHttpMethodOptionsObserveResponse): Observable<HttpResponse<Object>>;
    head<T>(url: string, options: types.zHttpMethodOptionsObserveResponse): Observable<HttpResponse<T>>;
    head(url: string, options?: types.HttpMethodOptions): Observable<Object>;
    head<T>(url: string, options?: types.HttpMethodOptions): Observable<T>;
    jsonp(url: string): Observable<any>;
    jsonp<T>(url: string): Observable<T>;
    options(url: string, options: types.zHttpMethodOptionsObserveArrayBufferBody): Observable<ArrayBuffer>;
    options(url: string, options: types.zHttpMethodOptionsObserveBlobBody): Observable<Blob>;
    options(url: string, options: types.zHttpMethodOptionsObserveTextBody): Observable<string>;
    options(url: string, options: types.zHttpMethodOptionsObserveArrayBufferEvents): Observable<HttpEvent<ArrayBuffer>>;
    options(url: string, options: types.zHttpMethodOptionsObserveBlobEvents): Observable<HttpEvent<Blob>>;
    options(url: string, options: types.zHttpMethodOptionsObserveTextEvents): Observable<HttpEvent<string>>;
    options(url: string, options: types.zHttpMethodOptionsObserveEvents): Observable<HttpEvent<Object>>;
    options<T>(url: string, options: types.zHttpMethodOptionsObserveEvents): Observable<HttpEvent<T>>;
    options(url: string, options: types.zHttpMethodOptionsObserveArrayBufferResponse): Observable<HttpResponse<ArrayBuffer>>;
    options(url: string, options: types.zHttpMethodOptionsObserveBlobResponse): Observable<HttpResponse<Blob>>;
    options(url: string, options: types.zHttpMethodOptionsObserveTextResponse): Observable<HttpResponse<string>>;
    options(url: string, options: types.zHttpMethodOptionsObserveResponse): Observable<HttpResponse<Object>>;
    options<T>(url: string, options: types.zHttpMethodOptionsObserveResponse): Observable<HttpResponse<T>>;
    options(url: string, options?: types.HttpMethodOptions): Observable<Object>;
    options<T>(url: string, options?: types.HttpMethodOptions): Observable<T>;
    patch(url: string, body: any | null, options: types.zHttpMethodOptionsObserveArrayBufferBody): Observable<ArrayBuffer>;
    patch(url: string, body: any | null, options: types.zHttpMethodOptionsObserveBlobBody): Observable<Blob>;
    patch(url: string, body: any | null, options: types.zHttpMethodOptionsObserveTextBody): Observable<string>;
    patch(url: string, body: any | null, options: types.zHttpMethodOptionsObserveArrayBufferEvents): Observable<HttpEvent<ArrayBuffer>>;
    patch(url: string, body: any | null, options: types.zHttpMethodOptionsObserveBlobEvents): Observable<HttpEvent<Blob>>;
    patch(url: string, body: any | null, options: types.zHttpMethodOptionsObserveTextEvents): Observable<HttpEvent<string>>;
    patch(url: string, body: any | null, options: types.zHttpMethodOptionsObserveEvents): Observable<HttpEvent<Object>>;
    patch<T>(url: string, body: any | null, options: types.zHttpMethodOptionsObserveEvents): Observable<HttpEvent<T>>;
    patch(url: string, body: any | null, options: types.zHttpMethodOptionsObserveArrayBufferResponse): Observable<HttpResponse<ArrayBuffer>>;
    patch(url: string, body: any | null, options: types.zHttpMethodOptionsObserveBlobResponse): Observable<HttpResponse<Blob>>;
    patch(url: string, body: any | null, options: types.zHttpMethodOptionsObserveTextResponse): Observable<HttpResponse<string>>;
    patch(url: string, body: any | null, options: types.zHttpMethodOptionsObserveResponse): Observable<HttpResponse<Object>>;
    patch<T>(url: string, body: any | null, options: types.zHttpMethodOptionsObserveResponse): Observable<HttpResponse<T>>;
    patch(url: string, body: any | null, options?: types.HttpMethodOptions): Observable<Object>;
    patch<T>(url: string, body: any | null, options?: types.HttpMethodOptions): Observable<T>;
    post(url: string, body: any | null, options: types.zHttpMethodOptionsObserveArrayBufferBody): Observable<ArrayBuffer>;
    post(url: string, body: any | null, options: types.zHttpMethodOptionsObserveBlobBody): Observable<Blob>;
    post(url: string, body: any | null, options: types.zHttpMethodOptionsObserveTextBody): Observable<string>;
    post(url: string, body: any | null, options: types.zHttpMethodOptionsObserveArrayBufferEvents): Observable<HttpEvent<ArrayBuffer>>;
    post(url: string, body: any | null, options: types.zHttpMethodOptionsObserveBlobEvents): Observable<HttpEvent<Blob>>;
    post(url: string, body: any | null, options: types.zHttpMethodOptionsObserveTextEvents): Observable<HttpEvent<string>>;
    post(url: string, body: any | null, options: types.zHttpMethodOptionsObserveEvents): Observable<HttpEvent<Object>>;
    post<T>(url: string, body: any | null, options: types.zHttpMethodOptionsObserveEvents): Observable<HttpEvent<T>>;
    post(url: string, body: any | null, options: types.zHttpMethodOptionsObserveArrayBufferResponse): Observable<HttpResponse<ArrayBuffer>>;
    post(url: string, body: any | null, options: types.zHttpMethodOptionsObserveBlobResponse): Observable<HttpResponse<Blob>>;
    post(url: string, body: any | null, options: types.zHttpMethodOptionsObserveTextResponse): Observable<HttpResponse<string>>;
    post(url: string, body: any | null, options: types.zHttpMethodOptionsObserveResponse): Observable<HttpResponse<Object>>;
    post<T>(url: string, body: any | null, options: types.zHttpMethodOptionsObserveResponse): Observable<HttpResponse<T>>;
    post(url: string, body: any | null, options?: types.HttpMethodOptions): Observable<Object>;
    post<T>(url: string, body: any | null, options?: types.HttpMethodOptions): Observable<T>;
    put(url: string, body: any | null, options: types.zHttpMethodOptionsObserveArrayBufferBody): Observable<ArrayBuffer>;
    put(url: string, body: any | null, options: types.zHttpMethodOptionsObserveBlobBody): Observable<Blob>;
    put(url: string, body: any | null, options: types.zHttpMethodOptionsObserveTextBody): Observable<string>;
    put(url: string, body: any | null, options: types.zHttpMethodOptionsObserveArrayBufferEvents): Observable<HttpEvent<ArrayBuffer>>;
    put(url: string, body: any | null, options: types.zHttpMethodOptionsObserveBlobEvents): Observable<HttpEvent<Blob>>;
    put(url: string, body: any | null, options: types.zHttpMethodOptionsObserveTextEvents): Observable<HttpEvent<string>>;
    put(url: string, body: any | null, options: types.zHttpMethodOptionsObserveEvents): Observable<HttpEvent<Object>>;
    put<T>(url: string, body: any | null, options: types.zHttpMethodOptionsObserveEvents): Observable<HttpEvent<T>>;
    put(url: string, body: any | null, options: types.zHttpMethodOptionsObserveArrayBufferResponse): Observable<HttpResponse<ArrayBuffer>>;
    put(url: string, body: any | null, options: types.zHttpMethodOptionsObserveBlobResponse): Observable<HttpResponse<Blob>>;
    put(url: string, body: any | null, options: types.zHttpMethodOptionsObserveTextResponse): Observable<HttpResponse<string>>;
    put(url: string, body: any | null, options: types.zHttpMethodOptionsObserveResponse): Observable<HttpResponse<Object>>;
    put<T>(url: string, body: any | null, options: types.zHttpMethodOptionsObserveResponse): Observable<HttpResponse<T>>;
    put(url: string, body: any | null, options?: types.HttpMethodOptions): Observable<Object>;
    put<T>(url: string, body: any | null, options?: types.HttpMethodOptions): Observable<T>;
}
