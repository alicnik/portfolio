import { Testimonial } from '@prisma/client';
import { Link } from '@remix-run/react';
import { ColumnDef } from '@tanstack/react-table';
import { Checkbox } from '~/components/shadcn/ui/checkbox';
import { CircledCrossIcon, CircledTickIcon } from '~/components/icons';

export const columns: ColumnDef<Testimonial>[] = [
	{
		header: 'Select',
		cell: ({ row }) => <Checkbox name={row.original.id} />,
	},
	{
		accessorKey: 'value',
		header: 'Content',
		cell: ({ row }) => {
			const name = String(row.getValue('value'));
			const id = row.original.id;
			return (
				<Link to={`/admin/testimonials/${id}`} className="line-clamp-1">
					{name}
				</Link>
			);
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
