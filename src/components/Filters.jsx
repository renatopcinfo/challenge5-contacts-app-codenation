import React from 'react';


export default ({ search, sort, setSort }) =>
	<div data-testid="filters" className="container">
		<section className="filters">
			<div className="filters__search">
				<input type="text" className="filters__search__input" placeholder="Pesquisar"
					onChange={e => search(e.target.value)}
				/>

				<button className="filters__search__icon">
					<i className="fa fa-search" />
				</button>
			</div>

			<button className={`filters__item ${sort === 'name' && 'is-selected'}`}
				onClick={() => setSort('name')}
			>
				Nome <i className="fas fa-sort-down" />
			</button>

			<button className={`filters__item ${sort === 'country' && 'is-selected'}`}
				onClick={() => setSort('country')}
			>
				País <i className="fas fa-sort-down" />
			</button>

			<button className={`filters__item ${sort === 'company' && 'is-selected'}`}
				onClick={() => setSort('company')}
			>
				Empresa <i className="fas fa-sort-down" />
			</button>

			<button className={`filters__item ${sort === 'department' && 'is-selected'}`}
				onClick={() => setSort('department')}
			>
				Departamento <i className="fas fa-sort-down" />
			</button>

			<button className={`filters__item ${sort === 'admissionDate' && 'is-selected'}`}
				onClick={() => setSort('admissionDate')}
			>
				Data de admissão <i className="fas fa-sort-down" />
			</button>
		</section>
	</div>