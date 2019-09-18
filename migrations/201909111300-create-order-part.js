module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('order_part', {
			id: {
				type: Sequelize.UUID,
				primaryKey: true,
			},
			part_id: {
				type: Sequelize.UUID,
				references: {
					model: 'part',
					key: 'id',
				},
				allowNull: false,
			},
			order_id: {
				type: Sequelize.UUID,
				references: {
					model: 'order',
					key: 'id',
				},
				allowNull: false,
			},
			material_type_id: {
				type: Sequelize.UUID,
				references: {
					model: 'material_type',
					key: 'id',
				},
				allowNull: false,
			},
			heat_treatment_id: {
				type: Sequelize.UUID,
				references: {
					model: 'heat_treatment',
					key: 'id',
				},
				allowNull: true,
			},
			superficial_treatment_id: {
				type: Sequelize.UUID,
				references: {
					model: 'superficial_treatment',
					key: 'id',
				},
				allowNull: true,
			},
			finishing: {
				type: Sequelize.ENUM(
					'STANDARD',
					'RECTIFIED',
					'POLISHED',
				),
				allowNull: true,
			},
			tolerance: {
				type: Sequelize.INTEGER,
				allowNull: true,
			},
			amount: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			raw_material_price: {
				type: Sequelize.BIGINT,
				allowNull: false,
			},
			volume_diff_price: {
				type: Sequelize.BIGINT,
				allowNull: false,
			},
			heat_treatment_price: {
				type: Sequelize.BIGINT,
				allowNull: true,
			},
			superficial_treatment_price: {
				type: Sequelize.BIGINT,
				allowNull: true,
			},
			tolerance_price: {
				type: Sequelize.BIGINT,
				allowNull: true,
			},
			finishing_price: {
				type: Sequelize.BIGINT,
				allowNull: true,
			},
			screw_price: {
				type: Sequelize.BIGINT,
				allowNull: true,
			},
			supplier_profit: {
				type: Sequelize.BIGINT,
				allowNull: false,
			},
			mech4u_profit: {
				type: Sequelize.BIGINT,
				allowNull: false,
			},
			created_at: {
				type: Sequelize.DATE,
				defaultValue: Sequelize.NOW,
				allowNull: false,
			},
			updated_at: {
				type: Sequelize.DATE,
				defaultValue: Sequelize.NOW,
				allowNull: false,
			},
			deleted_at: {
				type: Sequelize.DATE,
				defaultValue: null,
			},
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('order_part');
	},
};
