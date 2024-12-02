export default eventHandler(async (event) => {
	const drizzle = useDrizzle()
	const { limit, offset } = await usePagination(event)

	return drizzle.select()
		.from(tables.posts)
		.orderBy(desc(tables.posts.createdAt))
		.limit(limit)
		.offset(offset)
})
