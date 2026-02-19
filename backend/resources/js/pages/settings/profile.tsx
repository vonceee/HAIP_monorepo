import { Transition } from '@headlessui/react';
import { useForm, Head, usePage } from '@inertiajs/react';
import DeleteUser from '@/components/delete-user';
import Heading from '@/components/heading';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import AppLayout from '@/layouts/app-layout';
import SettingsLayout from '@/layouts/settings/layout';
import type { BreadcrumbItem, User } from '@/types';
import { update } from '@/actions/App/Http/Controllers/Settings/ProfileController';
import { edit } from '@/routes/profile';
import { cn } from '@/lib/utils';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Profile settings',
        href: edit().url,
    },
];

export default function Profile() {
    const { auth } = usePage().props;
    const user = auth.user as User;

    const { data, setData, patch, processing, recentlySuccessful, errors } =
        useForm({
            name: user.name,
            email: user.email,
            username: user.username ?? '',
            bio: user.bio ?? '',
        });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        patch(update.url(), {
            preserveScroll: true,
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Profile settings" />

            <h1 className="sr-only">Profile Settings</h1>

            <SettingsLayout>
                <div className="space-y-6">
                    <Heading
                        variant="small"
                        title="Profile information"
                        description="Update your profile details and public information"
                    />

                    <div className="flex items-center gap-4">
                        <Avatar className="h-16 w-16">
                            <AvatarImage
                                src={user.avatar}
                                referrerPolicy="no-referrer"
                            />
                            <AvatarFallback>
                                {user.name.charAt(0)}
                            </AvatarFallback>
                        </Avatar>
                        <div className="space-y-1">
                            <p className="text-sm leading-none font-medium">
                                {user.name}
                            </p>
                            <p className="text-sm text-muted-foreground">
                                {user.email}
                            </p>
                        </div>
                    </div>

                    <form onSubmit={submit} className="space-y-6">
                        <div className="grid gap-2">
                            <Label htmlFor="name">Name</Label>
                            <Input
                                id="name"
                                className="mt-1 block w-full"
                                value={data.name}
                                onChange={(e) =>
                                    setData('name', e.target.value)
                                }
                                required
                                autoComplete="name"
                                placeholder="Full name"
                            />
                            <InputError
                                className="mt-2"
                                message={errors.name}
                            />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="username">Username</Label>
                            <Input
                                id="username"
                                className="mt-1 block w-full"
                                value={data.username}
                                onChange={(e) =>
                                    setData('username', e.target.value)
                                }
                                autoComplete="username"
                                placeholder="username"
                            />
                            <InputError
                                className="mt-2"
                                message={errors.username}
                            />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="bio">Bio</Label>
                            <textarea
                                id="bio"
                                className={cn(
                                    'flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
                                    'mt-1 block w-full',
                                )}
                                value={data.bio}
                                onChange={(e) => setData('bio', e.target.value)}
                                placeholder="Tell us a little bit about yourself"
                                maxLength={160}
                            />
                            <div className="flex justify-between text-xs text-muted-foreground">
                                <InputError message={errors.bio} />
                                <span>{data.bio.length}/160</span>
                            </div>
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="email">Email address</Label>
                            <Input
                                id="email"
                                type="email"
                                className="mt-1 block w-full"
                                value={data.email}
                                disabled
                                readOnly
                            />
                            <InputError
                                className="mt-2"
                                message={errors.email}
                            />
                        </div>

                        <div className="flex items-center gap-4">
                            <Button disabled={processing}>Save</Button>

                            <Transition
                                show={recentlySuccessful}
                                enter="transition ease-in-out"
                                enterFrom="opacity-0"
                                leave="transition ease-in-out"
                                leaveTo="opacity-0"
                            >
                                <p className="text-sm text-neutral-600">
                                    Saved
                                </p>
                            </Transition>
                        </div>
                    </form>
                </div>

                <DeleteUser />
            </SettingsLayout>
        </AppLayout>
    );
}
