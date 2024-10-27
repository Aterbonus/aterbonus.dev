CREATE TABLE `misc` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`created_at` integer DEFAULT (unixepoch() * 1000) NOT NULL,
	`type` text NOT NULL,
	`content` text NOT NULL
);
--> statement-breakpoint
CREATE INDEX `misc_created_at_idx` ON `misc` (`created_at`);--> statement-breakpoint
CREATE INDEX `misc_type_idx` ON `misc` (`type`);--> statement-breakpoint
CREATE TABLE `posts` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`content` text NOT NULL,
	`created_at` integer DEFAULT (unixepoch() * 1000) NOT NULL
);
--> statement-breakpoint
CREATE INDEX `posts_created_at_idx` ON `posts` (`created_at`);