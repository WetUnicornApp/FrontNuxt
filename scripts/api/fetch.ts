import type { ApiResponse } from "~/types/responses/api-response";

export type fetchData = {
    endpoint: string;
    method: 'POST' | 'GET';
    body?: object;
};

export async function getData<T>(data: fetchData): Promise<ApiResponse<T>> {
    const config = useRuntimeConfig();
    const res = await $fetch<ApiResponse<T>>(config.public.apiBase + data.endpoint, {
        method: data.method,
        body: data.body,
    });

    return res;
}
