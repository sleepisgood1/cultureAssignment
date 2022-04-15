DROP TABLE IF EXISTS photos
-- probably later will need to add a table for experiments that will have a one(experiment) to many (photos) relationship
CREATE TABLE photos (
  id BIGSERIAL,
  url TEXT NOT NULL,
  foaming BOOLEAN,
  last_modified timestamp with time zone DEFAULT now()
)

-- ALTER TABLE photos ADD CONSTRAINT photos_pkey PRIMARY KEY (id);

-- probably want to index the foaming boolean since we'll be using that a lot (to search for ones without any boolean, etc.)
