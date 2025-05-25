import type { Communicate } from "~/types/communicate";
import type { ApiResponse } from "~/types/responses/api-response";

export type FetchData<TBody> = {
    endpoint: string;
    method: 'POST' | 'GET';
    body?: TBody;
    validate?: (item: TBody) => Communicate;
};

export async function getData<
    TBody extends Record<string, any> | BodyInit | null | undefined,
    TResult = TBody
>(
    data: FetchData<TBody>
): Promise<ApiResponse<TResult>> {
    const config = useRuntimeConfig();

    // lokalna walidacja
    if (typeof data.validate === 'function') {
        const check = data.validate(data.body as TBody);
        if (!check.success) {
            return { success: false, message: check.message, data: null as TResult };
        }
    }

    try {
        const res = await $fetch<ApiResponse<TResult>>(config.public.apiBase + data.endpoint, {
            method: data.method,
            body: data.body,
        });

        return res;
    } catch (error: any) {
        return {
            success: false,
            message: error?.data?.message || error?.message || 'Unknown error',
            data: null as TResult,
        };
    }
}
