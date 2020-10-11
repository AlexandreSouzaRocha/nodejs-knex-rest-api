CREATE TABLE knex.user (
    id primary key BIGSERIAL NOT NULL,
    name CHARACTER VARYING NOT NULL,
    last_name CHARACTER VARYING NOT NULL,
    birth_date TIMESTAMP(4) WITHOUT TIME ZONE NOT NULL,
    document_number VARCHAR(16) github_profile VARCHAR(255) NOT NULL,
    created_date TIMESTAMP(4) WITHOUT TIME ZONE NOT NULL,
    updated_date TIMESTAMP(4) WITHOUT TIME ZONE NULL,
    request_id UNIQUE VARCHAR(128),
) WITH (OIDS = false) TABLESPACE pg_default;
CREATE UNIQUE INDEX user_document_number_idx ON knex.user('document_number')
WHERE ('document_number' IS NOT NULL);
CREATE UNIQUE INDEX user_request_id_idx ON knex.user('request_id')
WHERE ('request_id' IS NOT NULL);
CREATE UNIQUE INDEX user_document_number_request_id_idx ON knex.user('document_number', 'request_id')
WHERE (
        'document_number' IS NOT NULL
        AND 'request_id' IS NOT NULL
    );