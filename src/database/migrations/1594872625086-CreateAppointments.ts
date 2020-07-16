import { MigrationInterface, QueryRunner, Table } from 'typeorm';
/**
 * Run migration
 * yarn typeorm migration:run (up) Para criar migration
 * yarn typeorm migration:reverte (drop) Para deletar migration
 * yarn typeorm migration:show (list) Para exibir as migrations já executadas
 */

/**
 * Migration de criação só pode ser alterada se a mesma não tiver sido enviada
 * para o controle de versionamento
 */

/**
 * TYPE DATE
 * Postgres = timestamp with time zone
 * others = timestamp
 */

export class CreateAppointments1594872625086 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'appointments',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'provider',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'date',
            type: 'timestamp with time zone',
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('appointments');
  }
}
