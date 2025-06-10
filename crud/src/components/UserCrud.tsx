import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

type User = {
    id: number;
    name: string;
    email: string;
};

export default function UserCrud() {
    const [users, setUsers] = useState<User[]>([]);
}
