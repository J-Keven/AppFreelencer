import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreateTablePivoCategorieIdFreelaId1603548641169
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'categorieIdFreelaId',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            generationStrategy: 'uuid',
            isPrimary: true,
            default: 'uuid_generate_v4()',
          },
          {
            name: 'cotegorie_id',
            type: 'uuid',
          },
          {
            name: 'freela_id',
            type: 'uuid',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );

    await queryRunner.createForeignKeys('categorieIdFreelaId', [
      new TableForeignKey({
        name: 'categorieForeingKey',
        columnNames: ['cotegorie_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'categories',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),

      new TableForeignKey({
        name: 'freelaForeingKey',
        columnNames: ['freela_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'freelas',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('categorieIdFreelaId', 'freelaForeingKey');

    await queryRunner.dropForeignKey(
      'categorieIdFreelaId',
      'categorieForeingKey',
    );
    await queryRunner.dropTable('categorieIdFreelaId');
  }
}
