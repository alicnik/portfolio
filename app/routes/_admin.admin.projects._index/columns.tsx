import { Project } from '@prisma/client';
import { Link } from '@remix-run/react';
import { ColumnDef } from '@tanstack/react-table';
import { CircledCrossIcon, CircledTickIcon } from '~/components/icons';
import { Checkbox } from '~/components/shadcn/ui/checkbox';

export const columns: ColumnDef<Project>[] = [
	{
		header: 'Select',
		cell: ({ row }) => <Checkbox name={row.original.id} />,
	},
	{
		accessorKey: 'name',
		header: 'Name',
		cell: ({ row }) => {
			const name = String(row.getValue('name'));
			const slug = row.original.slug;
			return <Link to={`/admin/projects/${slug}`}>{name}</Link>;
		},
	},
	{
		accessorKey: 'projectDate',
		header: 'Date',
		cell: ({ row }) => {
			const date = new Date(row.getValue('projectDate'));
			return date.toLocaleDateString('en-GB');
		},
	},
	{
		accessorKey: 'published',
		header: 'Published',
		cell: ({ row }) => {
			const published = Boolean(row.getValue('published'));
			return published ? (
				<CircledTickIcon className="text-green-500" />
			) : (
				<CircledCrossIcon className="text-red-400" />
			);
		},
	},
];
