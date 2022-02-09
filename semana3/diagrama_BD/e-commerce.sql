CREATE TYPE "menu_options" AS ENUM (
  'news',
  'feminine',
  'masculine',
  'kids',
  'promotion'
);

CREATE TYPE "star_options" AS ENUM (
  '1',
  '2',
  '3',
  '4',
  '5'
);

CREATE TYPE "status_options" AS ENUM (
  'processed',
  'shipped',
  'in_transit',
  'arrived'
);

CREATE TYPE "payment_options" AS ENUM (
  'cash_payment',
  'credit_card',
  'debit_card',
  'pix',
  'bank_slip'
);

CREATE TYPE "transaction_options" AS ENUM (
  'denied',
  'authorized'
);

CREATE TABLE "customers" (
  "id" serial PRIMARY KEY,
  "full_name" varchar(100) NOT NULL,
  "username" varchar(100) UNIQUE NOT NULL,
  "password" varchar(100) NOT NULL,
  "email" varchar(100) UNIQUE NOT NULL,
  "cpf" varchar(50) UNIQUE NOT NULL,
  "birth_date" timestamp NOT NULL,
  "telephone" varchar(50) NOT NULL,
  "country" varchar(50) NOT NULL,
  "uf" char(2) NOT NULL,
  "city" varchar(50) NOT NULL,
  "adress" varchar(150) NOT NULL,
  "gender" varchar(50),
  "zip_code" char(10) NOT NULL,
  "created_at" timestamp NOT NULL DEFAULT (now()),
  "modified_at" timestamp DEFAULT (now())
);

CREATE TABLE "customer_preferences" (
  "id" serial PRIMARY KEY,
  "customer_id" int,
  "brand" varchar(100),
  "size" varchar(20),
  "color" varchar(50),
  "price_range" decimal,
  "payment_type" payment_options,
  "created_at" timestamp NOT NULL DEFAULT (now()),
  "modified_at" timestamp DEFAULT (now())
);

CREATE TABLE "products" (
  "id" serial PRIMARY KEY,
  "name" varchar(100) NOT NULL,
  "description" text NOT NULL,
  "brand" varchar(100) NOT NULL,
  "image" varchar(255) NOT NULL,
  "category_id" int,
  "created_at" timestamp NOT NULL DEFAULT (now()),
  "modified_at" timestamp DEFAULT (now()),
  "deleted_at" timestamp DEFAULT (now())
);

CREATE TABLE "orders" (
  "id" serial PRIMARY KEY,
  "customer_id" int,
  "SKU_id" int,
  "quantity" int NOT NULL,
  "created_at" timestamp NOT NULL DEFAULT (now()),
  "modified_at" timestamp DEFAULT (now()),
  "deleted_at" timestamp DEFAULT (now())
);

CREATE TABLE "SKUs" (
  "id" serial PRIMARY KEY,
  "product_id" int,
  "size" varchar(20) NOT NULL,
  "color" varchar(50) NOT NULL,
  "price" decimal NOT NULL,
  "supplier_id" int,
  "discount_id" int,
  "order_item_id" int,
  "created_at" timestamp NOT NULL DEFAULT (now()),
  "modified_at" timestamp DEFAULT (now()),
  "deleted_at" timestamp DEFAULT (now())
);

CREATE TABLE "products_category" (
  "id" serial PRIMARY KEY,
  "name" menu_options NOT NULL,
  "description" text NOT NULL,
  "sale_rank_id" int,
  "created_at" timestamp NOT NULL DEFAULT (now()),
  "modified_at" timestamp DEFAULT (now())
);

CREATE TABLE "sales_rank" (
  "id" serial PRIMARY KEY,
  "star" star_options,
  "quantity" int NOT NULL,
  "created_at" timestamp NOT NULL DEFAULT (now())
);

CREATE TABLE "discounts" (
  "id" serial PRIMARY KEY,
  "name" varchar(100) NOT NULL,
  "description" text,
  "percent" decimal,
  "active" boolean NOT NULL,
  "created_at" timestamp NOT NULL DEFAULT (now()),
  "modified_at" timestamp DEFAULT (now())
);

CREATE TABLE "suppliers" (
  "id" serial PRIMARY KEY,
  "name" varchar(100) NOT NULL,
  "adress" varchar(150) NOT NULL,
  "country" varchar(50) NOT NULL,
  "uf" char(2) NOT NULL,
  "city" varchar(50) NOT NULL,
  "telephone" varchar(50) NOT NULL,
  "created_at" timestamp NOT NULL DEFAULT (now()),
  "modified_at" timestamp DEFAULT (now())
);

CREATE TABLE "order_details" (
  "id" serial PRIMARY KEY,
  "customer_id" int,
  "freight_rate" decimal NOT NULL,
  "total_cost" decimal NOT NULL,
  "order_id" int,
  "payment_id" int,
  "order_progress_id" int,
  "created_at" timestamp NOT NULL DEFAULT (now()),
  "modified_at" timestamp DEFAULT (now())
);

CREATE TABLE "order_items" (
  "id" serial PRIMARY KEY,
  "order_details_id" int,
  "quantity" int NOT NULL,
  "order_cancellation" boolean NOT NULL,
  "created_at" timestamp NOT NULL DEFAULT (now()),
  "modified_at" timestamp DEFAULT (now())
);

CREATE TABLE "order_progress" (
  "id" serial PRIMARY KEY,
  "tracking_code" varchar(255) NOT NULL,
  "status" status_options NOT NULL,
  "created_at" timestamp NOT NULL DEFAULT (now()),
  "modified_at" timestamp DEFAULT (now())
);

CREATE TABLE "payment_details" (
  "id" serial PRIMARY KEY,
  "payment_type" payment_options NOT NULL,
  "status" transaction_options,
  "created_at" timestamp NOT NULL DEFAULT (now()),
  "modified_at" timestamp DEFAULT (now())
);

CREATE TABLE "comments" (
  "id" serial PRIMARY KEY,
  "content" text NOT NULL,
  "comment_id" int,
  "customer_id" int,
  "product_id" int,
  "created_at" timestamp NOT NULL DEFAULT (now()),
  "modified_at" timestamp DEFAULT (now()),
  "deleted_at" timestamp DEFAULT (now())
);

CREATE TABLE "cart_items" (
  "id" serial PRIMARY KEY,
  "customer_id" int,
  "SKU_id" int,
  "quantity" int NOT NULL,
  "total_cost" decimal NOT NULL,
  "created_at" timestamp NOT NULL DEFAULT (now()),
  "modified_at" timestamp DEFAULT (now()),
  "deleted_at" timestamp DEFAULT (now())
);

ALTER TABLE "customer_preferences" ADD FOREIGN KEY ("customer_id") REFERENCES "customers" ("id");

ALTER TABLE "products" ADD FOREIGN KEY ("category_id") REFERENCES "products_category" ("id");

ALTER TABLE "orders" ADD FOREIGN KEY ("customer_id") REFERENCES "customers" ("id");

ALTER TABLE "orders" ADD FOREIGN KEY ("SKU_id") REFERENCES "SKUs" ("id");

ALTER TABLE "SKUs" ADD FOREIGN KEY ("product_id") REFERENCES "products" ("id");

ALTER TABLE "SKUs" ADD FOREIGN KEY ("supplier_id") REFERENCES "suppliers" ("id");

ALTER TABLE "SKUs" ADD FOREIGN KEY ("discount_id") REFERENCES "discounts" ("id");

ALTER TABLE "SKUs" ADD FOREIGN KEY ("order_item_id") REFERENCES "order_items" ("id");

ALTER TABLE "products_category" ADD FOREIGN KEY ("sale_rank_id") REFERENCES "sales_rank" ("id");

ALTER TABLE "order_details" ADD FOREIGN KEY ("customer_id") REFERENCES "customers" ("id");

ALTER TABLE "order_details" ADD FOREIGN KEY ("order_id") REFERENCES "orders" ("id");

ALTER TABLE "order_details" ADD FOREIGN KEY ("payment_id") REFERENCES "payment_details" ("id");

ALTER TABLE "order_details" ADD FOREIGN KEY ("order_progress_id") REFERENCES "order_progress" ("id");

ALTER TABLE "order_items" ADD FOREIGN KEY ("order_details_id") REFERENCES "order_details" ("id");

ALTER TABLE "comments" ADD FOREIGN KEY ("comment_id") REFERENCES "comments" ("id");

ALTER TABLE "comments" ADD FOREIGN KEY ("customer_id") REFERENCES "customers" ("id");

ALTER TABLE "comments" ADD FOREIGN KEY ("product_id") REFERENCES "products" ("id");

ALTER TABLE "cart_items" ADD FOREIGN KEY ("customer_id") REFERENCES "customers" ("id");

ALTER TABLE "cart_items" ADD FOREIGN KEY ("SKU_id") REFERENCES "SKUs" ("id");

CREATE INDEX ON "customers" ("full_name");

CREATE INDEX ON "customer_preferences" ("customer_id");

CREATE INDEX ON "products" ("name");

CREATE INDEX ON "orders" ("customer_id");

CREATE INDEX ON "SKUs" ("product_id");

CREATE INDEX ON "products_category" ("name");

CREATE INDEX ON "discounts" ("name");

CREATE INDEX ON "suppliers" ("name");

CREATE INDEX ON "order_details" ("customer_id");

CREATE INDEX ON "order_progress" ("tracking_code");

CREATE INDEX ON "payment_details" ("payment_type");

CREATE INDEX ON "comments" ("customer_id");

CREATE INDEX ON "cart_items" ("customer_id");
