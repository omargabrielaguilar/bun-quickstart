// src/components/UserCrud.tsx
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type User = {
    id: number;
    name: string;
    email: string;
};

export default function UserCrud() {
    const [users, setUsers] = useState<User[]>([]);
    const [form, setForm] = useState({
        name: "",
        email: "",
        id: null as number | null,
    });

    const handleSubmit = () => {
        if (!form.name || !form.email) return;

        if (form.id === null) {
            // crear
            setUsers([
                ...users,
                { id: Date.now(), name: form.name, email: form.email },
            ]);
        } else {
            // editar
            setUsers(
                users.map((u) =>
                    u.id === form.id
                        ? { ...u, name: form.name, email: form.email }
                        : u,
                ),
            );
        }

        setForm({ name: "", email: "", id: null });
    };

    const handleEdit = (user: User) => {
        setForm(user);
    };

    const handleDelete = (id: number) => {
        setUsers(users.filter((u) => u.id !== id));
    };

    return (
        <div className="p-6 max-w-2xl mx-auto">
            <Card className="mb-6">
                <CardContent className="space-y-4 pt-6">
                    <Input
                        placeholder="Nombre"
                        value={form.name}
                        onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                        }
                    />
                    <Input
                        placeholder="Email"
                        value={form.email}
                        onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                        }
                    />
                    <Button onClick={handleSubmit}>
                        {form.id ? "Actualizar" : "Crear"} Usuario
                    </Button>
                </CardContent>
            </Card>

            <div className="space-y-4">
                {users.map((user) => (
                    <Card
                        key={user.id}
                        className="flex items-center justify-between p-4"
                    >
                        <div>
                            <p className="font-semibold">{user.name}</p>
                            <p className="text-sm text-muted-foreground">
                                {user.email}
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <Button
                                variant="outline"
                                onClick={() => handleEdit(user)}
                            >
                                Editar
                            </Button>
                            <Button
                                variant="destructive"
                                onClick={() => handleDelete(user.id)}
                            >
                                Eliminar
                            </Button>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
