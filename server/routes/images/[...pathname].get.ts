import * as v from 'valibot'

export default eventHandler(async (event) => {
	const { pathname } = await getValidatedRouterParams(event, v.parser(v.object({
		pathname: v.string()
	})))

	return hubBlob().serve(event, pathname)
})
