import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm'

export class CreateRecipesTable1601061950109 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'recipes',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true,
          generationStrategy: 'uuid',
          default: 'uuid_generate_v4()'
        },
        {
          name: 'user_id',
          type: 'uuid'
        },
        {
          name: 'name',
          type: 'varchar'
        },
        {
          name: 'image',
          type: 'varchar'
        },
        {
          name: 'ingredients',
          type: 'varchar'
        },
        {
          name: 'mode_prepare',
          type: 'varchar'
        },
        {
          name: 'time',
          type: 'varchar',
          isNullable: true
        },
        {
          name: 'created_at',
          type: 'timestamp',
          default: 'now()'
        },
        {
          name: 'updated_at',
          type: 'timestamp',
          default: 'now()'
        }
      ]
    }))

    await queryRunner.createForeignKey(
      'recipes',
      new TableForeignKey({
        name: 'UserId',
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      })
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('recipes', 'UserId')

    await queryRunner.dropTable('recipes')
  }
}
