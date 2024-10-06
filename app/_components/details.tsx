"use client";

import React from "react";
import { Globe, Calendar, Server, Database, Network } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
  data: any;
}

const Details = ({ data }: Props) => {
  return (
    <Card className="w-full max-w-3xl mx-auto mt-14">
      <CardContent className="grid gap-6">
        <div className="grid gap-2">
          <h3 className="text-lg font-semibold">Domain Names</h3>
          <ul className="list-disc list-inside">
            {data.domain_name.map((name: any, index: any) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </div>

        <div className="grid gap-2">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <Database className="h-5 w-5" />
            Registrar
          </h3>
          <ul className="list-disc list-inside">
            {data.registrar.map((name: any, index: any) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="grid gap-2">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Creation Date
            </h3>
            <ul className="list-disc list-inside">
              {data.creation_date.map((date: any, index: any) => (
                <li key={index}>{date}</li>
              ))}
            </ul>
          </div>
          <div className="grid gap-2">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Expiration Date
            </h3>
            <ul className="list-disc list-inside">
              {data.expiration_date.map((date: any, index: any) => (
                <li key={index}>{date}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid gap-2">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <Server className="h-5 w-5" />
            Name Servers
          </h3>
          <ul className="grid grid-cols-2 gap-2 list-disc list-inside">
            {data.name_servers.map((server: any, index: any) => (
              <li key={index}>{server}</li>
            ))}
          </ul>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="grid gap-2">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Network className="h-5 w-5" />
              IP Address
            </h3>
            <ul className="grid grid-cols-2 gap-2 list-disc list-inside">
              {data.ip_address.map((server: any, index: any) => (
                <li key={index}>{server}</li>
              ))}
            </ul>
          </div>
          <div className="grid gap-2">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Server className="h-5 w-5" />
              Hosting Provider
            </h3>
            <ul className="grid grid-cols-2 gap-2 list-disc list-inside">
              {data.hosting_provider.map((server: any, index: any) => (
                <li key={index}>{server}</li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Details;
