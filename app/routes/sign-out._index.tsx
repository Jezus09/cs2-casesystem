/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Ian Lucas. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { LoaderFunctionArgs } from "@remix-run/node";
import { authenticator } from "~/auth.server";
import { middleware } from "~/http.server";

export async function loader({ request }: LoaderFunctionArgs) {
  await middleware(request);
  return await authenticator.logout(request, {
    redirectTo: "/"
  });
}
